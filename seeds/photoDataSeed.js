

//from models/Photo.js
const { Photo } = require('../models') 


const photodata = [
    {
        username : '',
        photoId : '',
        filename : '01-squirrel.jpg',
    },
    {
        username : '',
        photoId : '',
        filename : '02-aspen-leaves.jpg',
    },
    {
        username : '',
        photoId : '',
        filename : '03-dog.jpg',
    },
    {
        username : '',
        photoId : '',
        filename : '04-sloth.jpg',
    }
];

const seedPhoto = () =>
    Photo.bulkCreate(photodata);

module.exports=seedPhoto;
