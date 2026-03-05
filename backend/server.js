const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// LOGIN API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (username === "admin" && password === "admin") {
    return res.status(200).json({
      message: "Login successful",
      username: username,
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});