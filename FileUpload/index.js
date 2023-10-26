// app create
const express = require("express");
const app = express();

// PORT find krna hai
const PORT = process.env.PORT || 3000;

// middleware add krna hai
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

// db se connect krna hai
const db = require("./config/database");
db.connect();

// cloud se connect krna hai
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// api route mount krna hai
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

// activate the server
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
