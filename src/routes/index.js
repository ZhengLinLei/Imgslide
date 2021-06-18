const express = require('express');
const router = express.Router();

const controller = require('../controllers/cotroller');
const imageCtrl = require('../controllers/image'); // IMAGE CRUD CONTROLLER


module.exports = app => {
    // GENERATE APP ROUTES
    router.get('/', controller.index);
    router.get('/user', controller.user);
    router.get('/image/:idImage', controller.image);
    //
    router.post('/image', imageCtrl.create);
    router.post('/image/:idImage/like', controller.index);
    router.post('/image/:idImage/comment', controller.index);
    //
    router.put('/image', controller.index);
    router.put('/image/:idImage/like', controller.index);
    router.put('/image/:idImage/comment', controller.index);
    //
    router.delete('/image', controller.index);

    app.use(router)
}