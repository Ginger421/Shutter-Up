require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinaryUtils.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET,
    secure: true
});
module.exports = cloudinaryUtils;