const express = require('express');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

let router = require('./controllers/burgers_controller.js');

app.use("/", router);

app.listen(PORT, function () {
    console.log("server listening on: http://localhost:" + PORT);
});

