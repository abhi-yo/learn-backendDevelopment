// Server Instantiate (Generic)
const express = require("express");
const app = express();

// used to parse req.body in express -> POST or PUT
const bodyParser = require("body-parser");

// specifically parse JSON data and add it to the request.Body object
app.use(bodyParser.json());

// activate server on 3000 port (Generic)
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Routes (Syntax Generic)
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car created");
});

// MongoDB Connection (Generic) this is a promise so we can use .then
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });
