const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const env = require('dotenv');
const mongoose= require('mongoose')
env.config()

//db
mongoose.connect('mongodb://localhost:27017/bikash', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected')
})
const postRoutes = require('./routes/post');
app.use('/', postRoutes);

//Middleware
// const myMiddleware = ()=>{
//     console.log('This is my middle war');

// }
app.use(morgan('dev'));
app.use(bodyParser.json());

const port = process.env.PORT || 0;
app.listen(port, () => { console.log(`The port is ${port}`) });