<<<<<<< HEAD
const jwt = require('jsonwebtoken')
require('dotenv').config();

const isLoggedIn = (req ,res ,next) => {
    try {
        const token = req.headers.authorization;
        if(!token) {
            return res.status(401).json({ message : 'لم يتم توفير رمز الدخول'})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.currentUser = decoded;
        return next()
    } catch (error) {
        res.status(500).json(error);
    }
    
}

=======
const jwt = require('jsonwebtoken')
require('dotenv').config();

const isLoggedIn = (req ,res ,next) => {
    try {
        const token = req.headers.authorization;
        if(!token) {
            return res.status(401).json({ message : 'لم يتم توفير رمز الدخول'})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.currentUser = decoded;
        return next()
    } catch (error) {
        res.status(500).json(error);
    }
    
}

>>>>>>> 319d4e9268501efd489f306f2b58ca2efe21fa44
module.exports = isLoggedIn