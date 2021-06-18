const controller = {};

const ImageDB = require('../models/image');

const { chunkArr } = require('../helpers/libs');

controller.index = async (req, res) => {
    const images = chunkArr(await ImageDB.find().limit(16).sort({timestamp: -1}).lean(), 4);

    //Index page
    res.render('index', {images});
}

controller.user = async (req, res) => {
    const popularImages = chunkArr(await ImageDB.find().limit(8).sort({likes: -1}).lean(), 2); // CHUNK THE ARRAY INTO SUBARRAY WITH 2 ELEMENT
    //User page
    res.render('user', {popularImages});
}

controller.image = async (req, res) =>{
    // RENDER UNIQUE ID IMAGE
    const image = await ImageDB.find({filename: req.params.idImage}).limit(1).lean();
    const next = await ImageDB.find({_id: {$gt: image[0]._id}}).sort({_id: 1 }).limit(1).lean();// https://stackoverflow.com/questions/9153329/how-to-fetch-next-and-previous-item-of-the-current-one-with-mongoose
    const prev = await ImageDB.find({_id: {$lt: image[0]._id}}).sort({_id: -1 }).limit(1).lean();

    const popularImages = chunkArr(await ImageDB.find().limit(8).sort({likes: -1}).lean(), 2); // CHUNK THE ARRAY INTO SUBARRAY WITH 2 ELEMENT

    res.render('image', {image, next, prev, popularImages});
} 

module.exports = controller;