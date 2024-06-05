const express = require('express');
const axios = require('axios');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/kaggle/competitions', async (req, res) => {
  try {
    const response = await axios.get('https://www.kaggle.com/api/v1/competitions/list', {
      auth: {
        username: process.env.KAGGLE_USERNAME,
        password: process.env.KAGGLE_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching competitions:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/kaggle/datasets', async (req, res) => {
  try {
    const response = await axios.get('https://www.kaggle.com/api/v1/datasets/list', {
      auth: {
        username: process.env.KAGGLE_USERNAME,
        password: process.env.KAGGLE_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching datasets:', error);
    res.status(500).json({ error: error.message });
  }
});

// Route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'Please fill out all fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL, // sender's email address
    to: process.env.RECIPIENT_EMAIL, // your email address from .env
    subject: `Contact Form Submission from ${name}`,
    text: `You have a new message from your contact form:
    
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Subject: ${subject}
    Message: ${message}`,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
