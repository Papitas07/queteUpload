
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/', limits: { fileSize: 1024 * 1024 * 3 } });
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/monupload', upload.array('monfichier'), function (req, res, next) {
  fs.rename(req.files[0].path, 'public/images/' + req.files[0].originalname, function(err){
    if (err) {
        res.send('problème durant le déplacement');
    } else {
        res.send('Fichier uploadé avec succès');
    }
  });
 })


module.exports = router;
