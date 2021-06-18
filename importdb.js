// CALL DATABASE
require('./src/server/database');

const ImageDB = require('./src/models/image');

const dbData = require('./db');

console.log('Importing...');


(async () => {
    await ImageDB.insertMany(dbData.data, function(err) {
        if(err){
            console.error('Error importing: ', err, 'please try again');
        }else{
            console.log('Finished all the task, Bye');
        }
    });
    
    return true;
})();