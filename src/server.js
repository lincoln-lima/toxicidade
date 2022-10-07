const express = require("express");
const app = express();

const PORTA = process.env.PORT || 8081;
app.listen(PORTA, function () {
    console.log('\nServidor rodando na porta 8081');
});

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/*Caminho do pug*/
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

/*Alias de caminhos*/
app.use('/img', express.static(__dirname + '/publico/img'));
app.use('/css', express.static(__dirname + '/publico/css'));
app.use('/fonts', express.static(__dirname + '/publico/fonts'));
app.use('/js', express.static(__dirname + '/publico/js'));

app.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));

app.get('/', function (req, resp) {
    resp.render('index');
});

app.get('/quem-somos', function (req, resp) {
    resp.render('quem-somos');
});

app.get('/exemplos', function (req, resp) {
    resp.render('exemplos');
});

app.get('/consequencias', function (req, resp) {
    resp.render('consequencias');
});