const express = require('express');
const app = express();
const hbs = require('hbs');

//puerto pra heroku
const port = process.env.PORT || 3000;
//middleware
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//Helpers

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Velamy",
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});