const path          = require('path');
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const Question      = require('./models/question');
const questionApi   = require('./routes/question');

// Database connection
mongoose.connect(process.env.db_URL);

//===============================
// App settings
//===============================
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(questionApi);
app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.listen(process.env.PORT, process.env.IP, ()=> {
    console.log('The server is now running!');
});