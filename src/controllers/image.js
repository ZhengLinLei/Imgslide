const path = require('path');
const { randomNumber, extValidate } = require('../helpers/libs');

const fs = require('fs-extra');

const ImageDB = require('../models/image');

const controller = {};

controller.create = async (req, res) => {
    // console.log(req.file);
    const imageTempPath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase();

    if(extValidate(ext)){
        let imageName = randomNumber(12); // LIKE 001283jd AND THE + ext THE OUTPUT IS 0012883ASD.png

        // CHECK IF ISSET THE IMAGE
        while(!(await ImageDB.find({filename: imageName}))){
            imageName = randomNumber(12); // CHOOSE ANOTHER NAME
        }

        const savePath = path.resolve(`src/public/img/db/${imageName}${ext}`);// TARGET PATH

        await fs.rename(imageTempPath, savePath);

        // SAVE TO MONGO
        const newImg = new ImageDB({
            title: req.body.title,
            description: req.body.description,
            filename: imageName + ext
        });
        const newImgData = await newImg.save();

        res.send('/images');
    }else{
        await fs.unlink(imageTempPath);

        res.status(404).json({error: 'Only image extesions are allowed'});
    }
}

module.exports = controller;