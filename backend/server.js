const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  // Simulated AI OCR processing (Replace with real API)
  const extractedText = "Simulated OCR extracted text: Name: John Doe, Email: john@example.com";

  res.json({ text: extractedText });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
