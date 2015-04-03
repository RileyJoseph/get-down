var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
var Hashids = require("hashids"),
    hashids = new Hashids("this is my salt");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))


app.get("/", function(req,res){
  // res.send("hello world!")
  res.render("index");
});

app.get('/links', function(req,res){
  res.render('result');
})

app.post("/links", function(req,res){
  // res.send("test")
  db.Riley.create({ inputURL:req.body.url}).then(function(data){
    var hash = hashids.encode(data.id);
    data.outputURL = hash;
    data.save().then(function(result){
      res.render("result", {result: result.outputURL});
    })
  });
})

app.get("/:hash", function(req,res){
  // var dbID = parseInt(hashids.decode(req.params.hash));
  db.Riley.find({where: {outputURL: req.params.hash}}).then(function(taco){
    if(!taco){
      res.send('could not find url');
    }else{
      res.redirect('http://'+taco.inputURL);
    }

  })
});


// db.Riley.create({ inputURL: "https://github.com/ga-students/WDI_SEA_02_Notes/blob/master/week_03_into_to_express%2Fday_04_sequelize%2Fdusk_sequelize%2Freadme.md", outputURL: "405.u.no"});






app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
});