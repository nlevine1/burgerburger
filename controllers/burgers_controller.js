let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');


router.get("/", function (req, res) {
    burger.selectAll(function (data) {

        let hbsObject = {
            burgers: data
        };
      
        res.render("index", hbsObject);
    });
});

router.post("/new/burger", function(req, res) {
    console.log('right place?')
    
    burger.insert([req.body.burger_name, req.body.devoured], function() {
        res.redirect("/");
        console.log([req.body.burger_name]);
    });
});

router.put('/update/:id', function(req, res){
    burger.updateOne([req.body.devoured], [req.params.id], function(){
      res.redirect('/');
    });
  });
// .put




module.exports = router;