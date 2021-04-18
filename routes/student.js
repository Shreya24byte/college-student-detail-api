const express = require('express');
const router = express.Router();
const url = require('url');
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
    const path = req.url;
    const queryParamObjects = url.parse(path, true).query;
    studentSchema.find(
        { studentFirstName: queryParamObjects.name},
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