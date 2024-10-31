const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

// Import routes
const youtubeRoutes = require("./routes/youtube");
const trendsRoutes = require("./routes/trends");
const chatgptRoutes = require("./routes/chatgpt");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet()); // Security middleware applied early
app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 100, // limit each IP to 100 requests per windowMs
  })
);

// Routes
app.use("/api/youtube", youtubeRoutes);
app.use("/api/trends", trendsRoutes);
app.use("/api/chatgpt", chatgptRoutes);
app.use("/api/auth", authRoutes);

// Error handler should be the last middleware
app.use(errorHandler);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
