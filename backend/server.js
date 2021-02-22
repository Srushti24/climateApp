const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const querystring = require('querystring');
const axios=require('axios');
const app = express();
const port = 3000;



app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("climate app");
});
app.get('/climate', (req, res,next) => {
    console.log(req.query);
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    let url = "https://api.openweathermap.org/data/2.5/onecall?lat=" +latitude +"&lon="+longitude+"&exclude=hourly,daily&appid=7e51c5616cb1597bb1af561d3e119b85";
    console.log(url);
    axios.get(url)
        .then(response => res.json(response.data))
        .catch(err => next(err));
});

app.listen(port, () => console.log(`Hello ${port}!`));
