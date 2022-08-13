require('dotenv').config();

const cloudinary = require('cloudinary').v2;

const cloudinaryUtils = require('../../utils/cloudi.js');

// var selectedPic = 

//
// console.log(cloudinary);
// async function async_msg() {
//   try {
//     const result = await cloudinary.uploader.upload("./assets/images/Planet9_3840x2160.jpg")
//     console.log(result);
// //    console.log(result.api);
//   }
//   catch(e) {
//     console.log('Error!', e);
//   }
  
// };
// async_msg();



// router.get("/", async (req, res) => {
//   try {
//     const photoData = await Photo.findAll({
//       // include: [
//       //   {//
//       //     model: Painting,
//       //     attributes: ['filename', 'description'],
//       //   },
//       // ], !!!! add info from db
//     });

//     const galleries = photoData.map((gallery) => gallery.get({ plain: true }));
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
// cloudinary.config(
//   {api_key:process.env.API_KEY,
//   cloud_name:process.env.CLOUD_NAME}
// )
cloudinary.uploader.upload(".//assets/images/Planet9_3840x2160.jpg", {resource_type: "auto"})
  .then(result => {console.log(result)})
  .catch(error => {console.log(error)});


  // List all assets
// cloudinary.api.resources()
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});


  // Destroy with Upload API
// cloudinary.uploader.destroy("my_cheesecake", {invalidate: true})
// 	.then(result => {console.log(result)})
// 	.catch(error => {console.log(error)});


// assets\images\Planet9_3840x2160.jpg