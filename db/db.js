<<<<<<< HEAD
require('dotenv').config()
const monogoose = require('mongoose');
const db_uri = process.env.DB_URI

const connection = () => {
    monogoose.connect(db_uri);
    console.log('with db');
}

=======
require('dotenv').config()
const monogoose = require('mongoose');
const db_uri = process.env.DB_URI

const connection = () => {
    monogoose.connect(db_uri);
    console.log('with db');
}

>>>>>>> 319d4e9268501efd489f306f2b58ca2efe21fa44
module.exports = connection