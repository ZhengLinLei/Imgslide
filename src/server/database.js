const mongoose = require('mongoose');

// GET DBKEYS
const { database } = require('./dbkeys');

// CONNECT TO MONGODB
mongoose.connect(database.URI, {

    useNewUrlParser: true // SOME CASES TROW ERROR IF YOU DO NOT PASS THIS OPTION 

})
.then(db => console.log('DB connected'))
.catch(error => console.error(`Error in ${__filename} connecting database.\n ${error}`));