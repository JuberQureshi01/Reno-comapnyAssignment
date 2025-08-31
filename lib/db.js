import mysql from 'mysql2/promise';

let isTableInitialized = false;

async function initializeTable(connection) {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS schools (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name TEXT NOT NULL,
      address TEXT NOT NULL,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      contact VARCHAR(20),
      image TEXT,
      email_id VARCHAR(255)
    );
  `;

  await connection.execute(createTableQuery);
  console.log(" Table 'schools' is ready.");
  isTableInitialized = true;
}

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
   
    if (!isTableInitialized) {
      await initializeTable(dbconnection);
    }
    
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    console.error("Database Query Error:", error.message); 
    throw new Error(error.message);
  }
}

