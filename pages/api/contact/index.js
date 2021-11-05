const mongoose = require("mongoose");
import dbConnect from "../../../config/db";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !email.includes("@") || !message) {
      res.status(403).json({ message: "Please Include All Fields..." });
      return;
    }

    const added = await Contact.create({
      name,
      email,
      message,
    });

    if (added) {
      res.status(201).json({ message: "Contact Add successful" });
    } else {
      res.status(404).json({ message: "Contact Add fail" });
    }
  }
}

export default handler;
