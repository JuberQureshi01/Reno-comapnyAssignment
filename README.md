School Directory Web Application
This project is a full-stack web application built as a submission for the Web Development assignment from Reno Platforms. It allows users to add new schools to a directory and view the complete list of schools in a responsive, modern interface.

✨ Live Demo
The application is hosted on Vercel. You can view the live version here:

[Live Demo](https://reno-comapny-assignment.vercel.app/) 

 Core Features
Add New Schools: A dedicated, responsive form to add a new school's details, including its name, address, contact information, and an image.

Form Validation: Client-side validation is implemented using react-hook-form to ensure data integrity (e.g., required fields, valid email format).

Image Uploads: The form supports image uploads, which are stored on the server and linked to the respective school.

Responsive School Listing: All schools are displayed in a responsive, e-commerce-style grid that looks great on both desktop and mobile devices.

Server-Side Rendering (SSR): The main school listing page is server-rendered using getServerSideProps for optimal performance and SEO.

 Tech Stack
This project was built using a modern, full-stack JavaScript workflow:

Framework: Next.js (React)

Database: MySQL

Styling: Tailwind CSS

Form Management: React Hook Form

API File Handling: Formidable

Deployment: Vercel

 Screenshots
School Listing Page
Displays all schools in a responsive card grid, inspired by the assignment's reference.

Add School Form
A clean, user-friendly form with full validation for all required fields.

 Getting Started (Local Setup)
To run this project locally, please follow these steps:

1. Prerequisites
Node.js (v18 or later recommended)

2. Clone the Repository
git clone 
cd repo-name

3. Install Dependencies
npm install

4. Set Up Environment Variables
Create a new file named .env.local in the root of the project and add your database credentials. Use the .env.local.example file as a template:

# .env.local
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=schooldb

5. Set Up the Database
The project includes a script to automatically create the database and the schools table. Run the following command:

npm run db:setup

This will connect to your MySQL server using the credentials from your .env.local file and prepare the database.

6. Run the Development Server
You are now ready to start the application.

npm run dev

Open http://localhost:3000 in your browser to see the result.

 Folder Structure
The project follows the standard Next.js (Pages Router) structure:

├── components/       # Reusable React components (e.g., SchoolCard)

├── lib/              # Database connection logic

├── pages/            # Application pages and API routes

│   ├── api/          # Backend API endpoints (e.g., addSchool)

│   ├── addSchool.jsx # The 'Add School' form page

│   └── index.js      # The main school listing page

├── public/           # Static assets

│   └── schoolImages/ # Uploaded school images are stored here

├── scripts/          # Database setup script

└── styles/           # Global styles and Tailwind CSS config
