require("dotenv").config();

const cloudinary = require("cloudinary").v2;

// uploads resource to cloudinary
cloudinary.v2.uploader
  .upload("file name here", { resource_type: "auto" })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//  List all resources
cloudinary.v2.api
  .resources()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Destroy with Upload API
cloudinary.v2.uploader
  .destroy("file name here", { invalidate: true })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
