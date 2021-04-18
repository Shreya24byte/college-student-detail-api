const express = require('express');
const router = express.Router();
const studentSchema = require('../model/studentModel');

router.post('/add', function (req, res){
    console.log(req.body);
    const studentData = new studentSchema(req.body);
    //save to db
    studentData.save(function(err){
        if(err){
            console.log("error occurred", err);
        } else {
            console.log("data saved successfully");
            res.send({result:"Success"});
        }
    })
});

router.get("/getDetails",function(req,res){
    console.log("url", req.url);
    studentSchema.find(
        { studentFirstName: "raju"},
        {_id: 0, _v: 0 }, 
        function(err,data){
        if(err){
            console.log("error occurred", err);
        } else {
            res.send({result: data});
            console.log(data.studentFirstName);
        }
    })
})

module.exports = router;