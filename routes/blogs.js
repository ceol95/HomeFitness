var express = require('express');
var router = express.Router();
var Blog = require('../models/BlogModel');
//var Blog = mongoose.model('Blog',BlogSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('b/a', { title: 'Express' });
});

router.post('/insert_new_blog', function(req, res, next) {
    console.log(req.body.title);
    var newBlog  = new Blog ({
        title: req.body.title,
        author: req.body.author,
        content:req.body.content
    });
    newBlog.save((err)=>{
       if (err){
           res.json({
               result: "failed",
               data:{},
               message: `Error is : ${err}`
           })
       }else{
           res.json({
               result: "ok",
               data:{
                   title: req.body.title,
                   author: req.body.author,
                   message:"Insert new blog ok"
               }
           })
       }
    });
});

module.exports = router;
