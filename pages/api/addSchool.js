import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';
import path from 'path';
import { query } from '../../lib/db';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  try {
    const { fields, files } = data;

    const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
    if (!imageFile) {
        return res.status(400).json({ message: 'Image file is required.' });
    }

    const imagePath = imageFile.filepath;
    const newFileName = `${Date.now()}_${imageFile.originalFilename}`;
    const newPath = path.join(process.cwd(), 'public', 'schoolImages', newFileName);

    await fs.rename(imagePath, newPath);

const schoolData = {
      name: fields.name[0],
      address: fields.address[0],
      city: fields.city[0],
      state: fields.state[0],
      contact: fields.contact[0],
      email_id: fields.email_id[0],
      image: `/schoolImages/${newFileName}`,
    };

    const result = await query({
      query: 'INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)',
      values: [schoolData.name, schoolData.address, schoolData.city, schoolData.state, schoolData.contact, schoolData.email_id, schoolData.image],
    });

    res.status(201).json({ message: 'School added successfully', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}