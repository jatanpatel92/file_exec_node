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
	   exec('/path/to/file', function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
		  console.log('exec error: ' + error);
		}
		});  
  }
  fun();
  res.render('index', { title: 'Express' });
  
});


module.exports = router;
