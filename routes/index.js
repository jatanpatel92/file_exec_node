var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Executing file using Node' });
});

var exec = require('child_process').execFile;
router.post('/', function(req, res, next) {
  var fun = function(){
   console.log("fun() start");
   exec('/path/to/fileName.exe', function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    });  
  }
  fun();
  res.render('index', { title: 'Express' });
  
});


module.exports = router;
