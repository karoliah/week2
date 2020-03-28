'use strict';
// userRoute
const cors = require('cors');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/hack', (req,res)=> {
  res.send(req.body.search);
});

router.post('/', upload.single('user'), (req,res) => {
  console.log('tiedosto: ', req.file);
  userController.user_post(req,res);
});

router.put('/', userController.user_put); /*(req, res) => {
  res.send('With this endpoint you can edit users');
});*/

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users');
});


module.exports = router;