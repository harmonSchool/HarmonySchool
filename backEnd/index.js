const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors  =require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())





const db = require('./database/index')
const userRoutes = require('./routes/users')
const teacherRoute=require("./routes/teacher")
const classeRoute=require("./routes/classe")
const SubjectRoute=require("./routes/subject")
const StudentRoute=require("./routes/student")
const StudRoute= require('./routes/notes')
const { getAll } = require('./controllers/users');
const { update } = require('./controllers/EditProfile')
const { updateUserPassword } = require('../backEnd/controllers/users');
const mg = require('nodemailer-mailgun-transport'); 
const adminRoute=require("./routes/Admin")


const crypto = require('crypto');
const nodemailer = require('nodemailer');

app.use('/user',userRoutes)
app.use('/teacher',teacherRoute)
app.use('/classe',classeRoute)
app.use('/subject',SubjectRoute) 
app.use('/student',StudentRoute)
app.use('/note',StudRoute)
app.use("/admin",adminRoute)

const activeUsers = new Set();

io.on('connection', (socket) => {
  console.log("socket id", socket.id)
  socket.broadcast.emit("message",`The user ${socket.id} joined the chat`)
  socket.on('new user', (data) => {
    socket.userId = data;
    activeUsers.add(data);
    io.emit('new user', [...activeUsers]);
  });

  socket.on("join", (userId,TeacherId) => {
    const chat = `SELECT users_idusers FROM chat WHERE users_iduser = ${userId} AND teachers_idteacher=${TeacherId} LIMIT 1`
    if(!chat){
      const room = `INSERT INTO chat SET ?`
      socket.join(room.id);
      console.log(`User with ID: ${socket.id} joined room: ${room.id}`);
    } else {
      socket.join(chat.id)
    }
  });
  socket.on('voiceMessage', (audio) => {
    console.log('Received voice message:', audio);
    socket.broadcast.emit('voiceMessage', audio);
  });
  
  socket.on("send", (data) => {
    console.log(data)
    io.to(data.chat_idchat).emit("message", data);
  });
  

  socket.on('disconnect', () => {
    activeUsers.delete(socket.userId);
    io.emit('message', "a user has left");
  });

  // socket.on('chat message', (data) => {
  //   io.emit('chat message', data);
  // });

  // socket.on('message', (message) => {
  //   console.log('Received message:', message);
  //   io.emit('message', message);
  // });
});
{/*app.use('/api/payement',payementRoutes);*/}

const CLIENT_ID = "269394138802-7d0vaf1cq2nh8tqqipujdd27plsri8t8.apps.googleusercontent.com"
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04Tq0ie_KxFuCCgYIARAAGAQSNwF-L9Irp-uftta6x36cYuWPk2Io4ZaQ7-Oi1UW_6Fdx8d3EIw27QC_sosOGS0wEUswIMSgLX2A";

app.get('user/getAll',(req,res)=>{
  getAll((err,result)=>{
      if(err){
          res.status(500).json(err)
      }
      else {
          res.status(200).json(result)
      }
  })
})

app.put('/api/users/editProfile',(req,res)=>{
  update((err,result)=>{
      if(err){
          res.status(500).json(err)
      }
      else {
          res.status(200).json(result)
      }
  })
})



const SECRET_KEY = "sdsdsd12014651520ds52qqs"; 

let generatedVerificationCode;
let resetTokens = new Set();

function generateVerificationCode() {
  const code = crypto.randomInt(100000, 1000000);
  generatedVerificationCode = code.toString();
  return generatedVerificationCode;
}

app.post('/send-verification-code', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Recipient email is required' });
  }
 
  const verificationCode = generateVerificationCode();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port:465,
    secure:true,
    logger:true,
    debug:true,
    secureConnection:false,
    auth:{
      user:"oubaidbensaid18910@gmail.com",
      pass:"jyuk kkny txpk epba "
    },
    tls:{
      rejectUnauthorized:true
    }
  });

  const mailOptions = {
    from: 'oubaidbensaid18@gmail.com',
    to: email,
    subject: 'school',
    text: `Your verification code is: ${verificationCode}  `,

    
  };

  console.log('Generated Verification Code:', generatedVerificationCode);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send verification code' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Verification code sent successfully' });
    }
  });
});

app.post('/check-verification-code', (req, res) => {
  const { verificationCode } = req.body;

  if (!verificationCode) {
    return res.status(400).json({ message: 'Verification code is required' });
  }

  console.log('Generated Verification Code:', generatedVerificationCode);

  if (verificationCode === generatedVerificationCode) {
  console.log('Verification code is valid');
    res.status(200).json({ message: 'Verification code is valid' });
  } else {
    console.log('Verification code is invalid');
    res.status(400).json({ message: 'Verification code is invalid' });
  }
});

function generateResetToken(userId) {
  const payload = {
    user: {
      id: userId,
    },
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

// Route to reset password



app.patch('/reset-password/:idusers', (req, res) => {
  const { newPassword, confirmNewPassword } = req.body;
  const userId = req.params.idusers; 

  if (!newPassword || !confirmNewPassword) {
    return res.status(400).json({ message: 'Both the new password and confirmation are required' });
  }

  if (newPassword !== confirmNewPassword) {
    return res.status(400).json({ message: 'New password and confirmation do not match' });
  }
  try {
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});




io.listen(3001) 
server.listen(3000, () => {
  console.log('listening on *:3000');
});




//contact us using nodemailer 


app.post('/contactUs', (req, res) => {
  const { first_name , phone_number , email , message } = req.body;

  if (!first_name || !phone_number || !email || !message  ) {
    return res.status(400).json({ message: ' you need to put all the information' });
  }


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port:465,
    secure:true,
    logger:true,
    debug:true,
    secureConnection:false,
    auth:{
      user:"oubaidbensaid18910@gmail.com",
      pass:"jyuk kkny txpk epba "
    },
    tls:{
      rejectUnauthorized:true
    }
  });

  const mailOptions = {
    from: 'oubaidbensaid18@gmail.com',
    to: email,
    subject: 'school',
    html: `
        <html>
            <body>
                <p><strong>Message from ${first_name}</strong></p>
                <p><strong>phone number ${phone_number}</strong></p>

                <p>${message}</p>
            </body>
        </html>
    `
};

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send a message' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'your message is send successfully' });
    }
  });
});





//autozi email 




app.post('/send-email', (req, res) => {
  const {  email } = req.body;

  if (!email   ) {
    return res.status(400).json({ message: ' you need to put all the information' });
  }


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port:465,
    secure:true,
    logger:true,
    debug:true,
    secureConnection:false,
    auth:{
      user:"oubaidbensaid18910@gmail.com",
      pass:"jyuk kkny txpk epba "
    },
    tls:{
      rejectUnauthorized:true
    }
  });

  const mailOptions = {
    from: 'oubaidbensaid18@gmail.com',
    to: email,
    subject: 'school',
    html: `
        <html>
            <body>
                <p><strong> this user try to pay  ${email}</strong></p>

            </body>
        </html>
    `
};

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send a message' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'your message is send successfully' });
    }
  });
});



app.post('/notify-admin', (req, res) => {
  const { message } = req.body;

  const adminEmail = 'oubaidbensaid18910@gmail.com'; 

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user:"oubaidbensaid18910@gmail.com",
      pass:"jyuk kkny txpk epba "
    }
  });
  const mailOptions = {
    from: 'oubaidbensaid18@gmail.com',
    to: adminEmail,
    subject: 'Notification from Your App',
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to notify the admin.' });
    } else {
      console.log(`Email sent to admin (${adminEmail}): ${message}`);
      res.status(200).json({ message: 'Admin has been notified successfully.' });
    }
  });
});







const port = process.env.PORT || 2023; 
app.listen(port, () => {
    console.log(`Server connected on port ${port}`);
});



 



























