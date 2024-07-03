const express = require('express');
const axios = require('axios');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5001;

require('dotenv').config();

// Kaggle.json dosyasını okumak
const kaggleConfigPath = path.join('/etc/secrets', 'Kaggle.json');
if (fs.existsSync(kaggleConfigPath)) {
  const kaggleConfig = JSON.parse(fs.readFileSync(kaggleConfigPath, 'utf-8'));
  process.env.KAGGLE_USERNAME = kaggleConfig.username;
  process.env.KAGGLE_KEY = kaggleConfig.key;
} else {
  console.error('Kaggle.json dosyası bulunamadı. Lütfen gizli dosyaları doğru şekilde ekleyin.');
}

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
    from: process.env.EMAIL,
    to: process.env.RECIPIENT_EMAIL,
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

// Route to run Python, C++, and JavaScript code
app.post('/run', (req, res) => {
  const { language, code } = req.body;
  console.log(`Received code for language: ${language}`);
  console.log(`Code: ${code}`);

  if (language === 'python') {
    const filename = path.join(__dirname, 'temp.py');
    const pythonCode = `#!/usr/bin/env python3\n${code}`;
    fs.writeFile(filename, pythonCode, (err) => {
      if (err) {
        console.error(`Error writing Python file: ${err}`);
        return res.status(500).json({ result: err.message });
      }
      console.log(`Python file written successfully: ${pythonCode}`);
      console.log(`Executing Python file at path: ${filename}`);

      exec(`python3 ${filename}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error running Python code: ${stderr}`);
          return res.status(500).json({ result: stderr });
        }
        console.log(`Python stdout: ${stdout}`);
        console.log(`Python stderr: ${stderr}`);
        res.json({ result: stdout || stderr });

        fs.unlink(filename, (err) => {
          if (err) console.error(`Error deleting Python file: ${err}`);
        });
      });
    });
  } else if (language === 'cpp') {
    const filename = path.join(__dirname, 'temp.cpp');
    const outputfile = path.join(__dirname, 'temp.out');

    fs.writeFile(filename, code, (err) => {
      if (err) {
        console.error(`Error writing C++ file: ${err}`);
        return res.status(500).json({ result: err.message });
      }
      console.log(`C++ file written successfully: ${code}`);

      exec(`g++ -std=c++11 ${filename} -o ${outputfile}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error compiling C++ code: ${stderr}`);
          return res.status(500).json({ result: stderr });
        }
        console.log(`C++ compilation successful: ${stdout}`);
        console.log(`Running the compiled C++ program...`);

        exec(`${outputfile}`, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error running C++ code: ${stderr}`);
            return res.status(500).json({ result: stderr });
          }
          console.log(`C++ stdout: ${stdout}`);
          res.json({ result: stdout });

          fs.unlink(filename, (err) => {
            if (err) console.error(`Error deleting C++ source file: ${err}`);
          });
          fs.unlink(outputfile, (err) => {
            if (err) console.error(`Error deleting C++ output file: ${err}`);
          });
        });
      });
    });
  } else if (language === 'javascript') {
    const filename = path.join(__dirname, 'temp.js');
    fs.writeFile(filename, code, (err) => {
      if (err) {
        console.error(`Error writing JavaScript file: ${err}`);
        return res.status(500).json({ result: err.message });
      }
      console.log(`JavaScript file written successfully: ${code}`);
      console.log(`Executing JavaScript file at path: ${filename}`);

      exec(`node ${filename}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error running JavaScript code: ${stderr}`);
          return res.status(500).json({ result: stderr });
        }
        console.log(`JavaScript stdout: ${stdout}`);
        console.log(`JavaScript stderr: ${stderr}`);
        res.json({ result: stdout || stderr });

        fs.unlink(filename, (err) => {
          if (err) console.error(`Error deleting JavaScript file: ${err}`);
        });
      });
    });
  } else {
    res.status(400).json({ result: 'Unsupported language' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
