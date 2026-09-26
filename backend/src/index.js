//const express = require('express');
import express from "express";
import "dotenv/config";

import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT;

//console.log(process.env.DB_URL)

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port PORT:',PORT);
});