const File = require("../models/File");

// localfileupload -> handler function create
exports.localFileUpload = async (req, res) => {
  try {
    // fetch file form request
    const file = req.files.file;
    console.log("FILE AAGYI ->", file);
    // create path where file needs to be stored
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    // add path to the move function
    file.mv(path, (err) => {
      console.log(err);
    });
    // create a successful response
    res.json({
      success: true,
      message: "Local file uploaded successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
