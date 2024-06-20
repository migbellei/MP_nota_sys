const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('hbs', hbs.engine({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname + '/public')))

const indexRoute = require('./routes/indexRoute.js');
const portfolioPage = require('./routes/portfolioRoute');

app.use('', indexRoute);
app.use('/portfolio', portfolioPage);

app.listen(PORT, () => {
    console.log('app is running')
})