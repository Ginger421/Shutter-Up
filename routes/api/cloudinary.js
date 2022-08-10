require('dotenv').config();

const cloudinary = require('cloudinary').v2;

// cloudinary.config(
//   {api_key:process.env.API_KEY}
// )
cloudinary.uploader.upload("./images/Planet9_3840x2160.jpg", {resource_type: "auto"})
  .then(result => {console.log(result)})
  .catch(error => {console.log(error)});
