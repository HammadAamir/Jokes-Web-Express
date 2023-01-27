const express = require('express');
const multer = require('multer')
const path = require('path');
const handlebars = require('express-handlebars');
const mainRouter = require('./routers/main');
const PORT = 3000;

const upload = multer();
const app = express();

const hbs = handlebars.create({
    defaultLayout: 'main'
})

app.engine('handlebars', hbs.engine)
app.set('view engine', '.handlebars');
app.use(express.json())
app.use(express.urlencoded())
app.use(upload.array())
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', mainRouter)

app.get('*', (req, res) => {
    res.send('<h1>404 not found</h1>Url not available.')
})

app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`)
});