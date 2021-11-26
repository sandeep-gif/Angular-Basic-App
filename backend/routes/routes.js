const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;

const Blog = require('../models/blog.js');

router.get('/read', async (req, res) => {
    Blog.find((err, doc) => {
        if(err){
           console.log('Error in Get Data'+err) 
        }
        else{
            res.send(doc);
        }
    })
});




router.get('/read/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)
    ){
        Blog.findById(req.params.id,(err, doc) => {
            if(err){
                console.log('Error in Get Blog by Id'+ err) 
             }
             else{
                 res.send(doc);
             }
        });
    }
    else{
        return res.status(400).send('No record found with id' + req.params.id);
    }     
});



router.post('/create', (req, res) => {
    let blog = new Blog({
        title: req.body.title,
        catagory: req.body.catagory,
        description: req.body.description,
        content: req.body.content
    });

    blog.save( (err, doc) => {
        if(err){
           console.log('Error in Post Data'+err) 
        }
        else{
            res.send(doc);
        }
    })
});

router.put('/update/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)
    ){
        let blog = {
            title: req.body.title,
            catagory: req.body.catagory,
            description: req.body.description,
            content: req.body.content
        };

        Blog.findByIdAndUpdate(req.params.id, {$set: blog}, {new: true},
             (err, doc) => {
            if(err){
                console.log('Error in Update Blog by Id'+ err) 
             }
             else{
                 res.send(doc);
             }
        });
    }
    else{
        return res.status(400).send('No record found with id' + req.params.id);
    }     
});


router.delete('/delete/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)
    ){
        Blog.findByIdAndRemove(req.params.id,(err, doc) => {
            if(err){
                console.log('Error in Deleting Blog by Id'+ err) 
             }
             else{
                 res.send(doc);
             }
        });
    }
    else{
        return res.status(400).send('No record found with id' + req.params.id);
    }     
});




module.exports = router;