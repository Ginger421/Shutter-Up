require('dotenv').config();

const cloudinary = require('cloudinary').v2;

//const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET
});

// uploads resource to cloudinary
cloudinary.uploader.upload("./assets/images/01-squirrel.jpg", {resource_type: "auto"})
  .then(result => {console.log(result)})
  .catch(error => {console.log(error)});


// //  List all resources
// cloudinary.api.resources()
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});


// // Destroy with Upload API
// cloudinary.uploader.destroy("file name here", {invalidate: true})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});