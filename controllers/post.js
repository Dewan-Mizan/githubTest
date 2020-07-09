const Post = require('../models/post');
exports.response = (req, res) => {
    res.json({
        posts:[{title:'Mizan'},{title:'Prince'}]
    })
}
exports.createPost=(req,res)=>{
    const post= new Post(req.body); /* req.body refers postSchema body as request*/
    console.log('Creating a new post: ',req.body);   
}

