const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const nodemailer = require("nodemailer");
const { Resend } = require("resend");
const Contact = require("./models/contact");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
  origin: "*",   // temporarily allow all origins
  methods: ["GET", "POST"],
}));

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Contact Message",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.log("FULL ERROR:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(200).json({ success: true });

//   } catch (error) {
//     console.log("FULL ERROR:", error);
//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
