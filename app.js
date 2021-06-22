const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// code here for adding static assets
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('cal');
});

app.get('/cal', (req, res) => {
  res.render('index');
});
app.post('/cal', (req, res) => {
  var age = parseFloat(req.body.age);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = req.body.result;
  var result = "Your BMI result is: " + (weight / ((height * height) / 10000)).toFixed(1);
  res.render('cal', { result: result, weight: weight, height: height, age: age });
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!')
});