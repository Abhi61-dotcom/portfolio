const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Contact = require("./models/contact")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send Email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});


app.listen(process.env.PORT, () => {
  console.log("Server running 🚀");
});
