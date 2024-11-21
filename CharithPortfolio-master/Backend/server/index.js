const express = require('express');
const connectDb = require('./db.js');
const bodyParser = require('body-parser');
const cors  = require('cors');
const Contact = require('./model/contactmodel.js');

const app = express();

const PORT = process.env.PORT||5000;

connectDb();

app.use(cors());
app.use(bodyParser.json());

app.post('/',async (req,res)=>{
  try {
    const { name, email,mobile, message } = req.body;
    // Save the contact form data to MongoDB
    const newContact = new Contact({ name, email, mobile ,message });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
      console.error('Error saving contact form:', error);
      res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

app.get('/', async (req,res)=>{
  const contacts =  await Contact.find();
  res.json(contacts);
})

app.listen(PORT,()=>{
  console.log(`Server is running on port:${PORT}`);
})

