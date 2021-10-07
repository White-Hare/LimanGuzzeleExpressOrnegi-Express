var express = require('express');
var router = express.Router();


let names = [{
  name: "mete",
  surname: "arslan"
},{
  name: "mehmet",
  surname: "basibuyuk"
},{
  name: "ali",
  surname: "veli"
}];


router.get('/getNames', function (req, res, next) {
  res.send(JSON.stringify(names));
});


router.post('/addName', function (req, res, next) {
  console.log(req.body);
  if(!req.body.name || !req.body.surname)
    return res.send('FAILED').status(400);
  
  names.push(req.body);
  res.send("OK").status(200);
});


module.exports = router;