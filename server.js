const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
const port = process.env.PORT || 3000;
var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('currentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());
app.use((req, res, next) => {
    var date = new Date().toDateString();
    console.log(`${date}: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello Express!!');
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        welcomeMessage: 'Welcome to about us page'
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports.app = app;