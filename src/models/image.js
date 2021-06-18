const mongoose = require('mongoose');
const { Schema } = mongoose;

// CREATE THE DEFAULT SCHEMA 
const ImageSchema = new Schema({
    title: {type: String},
    description: {type: String},
    filename: {type: String},
    likes: {type: Number, default: 0},
    views: {type: Number, default: 0},
    timestamp: {type: Date, default: Date.now}
});

// ImageSchema.virtual('uniqueId').get(() => {
//     return this.filename.replace(path.extname(this.filename), ''); ---------> THIS DOES NOT WORKING, BECAUSE IN NEW VERSION OF HANDLEBARS DO NOT SUPPORT mongoose DIRECT OBJECT SO WE USE lean() AND MAKE SURE TO GET ORIGINAL JSON
// });                                                                ---------> FOR MORE INFO READ THIS IN SPANISH https://es.stackoverflow.com/questions/352085/problemas-con-handlebars

module.exports = mongoose.model('Image', ImageSchema);