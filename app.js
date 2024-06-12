<<<<<<< HEAD
const express = require('express');
const app = express();
const cors = require('cors')
const connection = require('./db/db')
const morgan = require('morgan')
const router = require('./Routes/index')
const path = require('path')

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router),
app.listen(3000, () => console.log('server is live'));
connection()
=======
const express = require('express');
const app = express();
const cors = require('cors')
const connection = require('./db/db')
const morgan = require('morgan')
const router = require('./Routes/index')
const path = require('path')

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', router),
app.listen(3000, () => console.log('server is live'));
connection()
>>>>>>> 319d4e9268501efd489f306f2b58ca2efe21fa44
