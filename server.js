import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./SendEmail.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}`, credentials: true }));
const port = process.env.PORT || 5000;

// ****** SEND API
app.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    EmailSender({ name, email, message });
    res.json({ msg: "Your message sent successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Error ❌" });
  }
});

app.listen(port, () => {
  console.log(`Corriendo en puerto:${port}`);
});
