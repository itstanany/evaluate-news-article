require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const { analyse } = require('./analyse');

const { SERVER_PORT } = process.env;


const app = express();
// Configure cors to avoid cors-origin issue
app.use(cors());
// Configure express to use body-parser as middle-ware.
app.use(bodyParser());
// Configure express static directory.
app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
    res.sendFile(path.resolve('dist/index.html'))
})
// a route that handling post request for new URL that coming from the frontend
app.post('/analyse', analyse)


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(SERVER_PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${SERVER_PORT}!`)
})

module.exports = {
    app,
}