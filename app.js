const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const db = require('./config/keys').MongoURI;

//MLab Connection
mongoose.connect(db, {useNewUrlParser: true})
        .then( () => console.log('MongoDB connected'))
        .catch( e => console.log(e));


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port : ${PORT}`)
})