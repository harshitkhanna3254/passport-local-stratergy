const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => res.render('login'))
router.get('/register', (req, res) => res.render('register'))

//Register Form Handle
router.post('/register', (req, res) => {
    console.log(req.body)
    const {name, email, password, password2} = req.body;
    let errors = [];

    //Check Required Fields
    if(!name || !email || !password || !password2)
        errors.push({msg: 'Please fill in all fields'})
    
    //Check if Passwords Match
    if(password !== password2)
        errors.push({msg: 'Passwords do not match'})
    
    //Check Password Length
    if(password.length < 6)
        errors.push({msg: 'Password length should be more than 6 characters'})

    if(errors.length > 0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    } else {
        res.send({
            working: true,
            data: req.body
        })
    }
})

module.exports = router;