require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const { PORT } = process.env;
const { Products } = require('./models')


// changed from app to server
const server = express();
process.env.HTTPS = true

// session middleware
const sess = {
    secret: 'keyboard cat',
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false
}
server.use(session(sess));
// server.use(passport.initialize());
// server.use(passport.session());


// Serving up the static build file for React
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));
server.use(express.json());

// to see if server is running
server.get('/api/products', async (req, res) => {
    const products = await Products.findAll();
    res.json(products);
    console.log(products);
});

// catching all URL errors and redirecting to home page in build file
// server.get('*', function (req, res) {
//     res.sendFile(__dirname + '/react-ui/build/index.html');
// });

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});