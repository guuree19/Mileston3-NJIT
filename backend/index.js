const express = require('express');
require('dotenv').config();  
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Import nodemailer package
const path = require('path'); // Import path module
const routeHandler = require('./routes/handler.js');
// new code
const homePageRouter = require('./routes/home'); 
const aboutRoutes = require('./routes/about.js');  
const activitiesRouter = require('./routes/activitesRoute.js');
const contactRoutes = require('./routes/contactRoutes');
const postsRouter = require('./routes/Post'); 


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 


// Serve static files from the frontend/public directory
app.use('/public', express.static(path.join(__dirname, '..' ,'frontend', 'public')));

app.use('/', routeHandler);
// new code
app.use('/api/home', homePageRouter);         
app.use('/api/about', aboutRoutes);          
app.use('/api/activities', activitiesRouter); 
app.use('/api/contacts', contactRoutes);
app.use('/api/posts', postsRouter);



app.get('/', (req, res) => {
  res.send('Application is working ok!');
});

// DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB is connected');
  })
  .catch((err) => {
    console.log(err);
  });

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
app.post('/api/posts', (req, res) => {
  try {
      const { title, content } = req.body;
      if (!title || !content) {
          return res.status(400).json({ message: "Title and content are required." });
      }
      // Assuming a function that handles the creation of a post
      const post = createPost(title, content);
      res.status(201).json(post);
  } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ message: 'Server error while creating post' });
  }
});

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// BACKEND
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
