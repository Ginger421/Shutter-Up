

//from models/Photo.js
const { Photo } = require('../models') 


const photodata = [
    {
        user_id : '',
        id : '',
        filename : '01-squirrel.jpg',
    },
    {
        user_id : '',
        id : '',
        filename : '02-aspen-leaves.jpg',
    },
    {
        user_id : '',
        id : '',
        filename : '03-dog.jpg',
    },
    {
        user_id : '',
        id : '',
        filename : '04-sloth.jpg',
    }
];  ``

const seedPhoto = () =>
    Photo.bulkCreate(photodata);

module.exports=seedPhoto;
