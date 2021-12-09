const os = require('os');
const Mots = require('./test');
const open = require("open");
const express = require("express")
const app = express()
const http = require('http');
const server = http.createServer(app);
app.use(express.static(__dirname))
let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

console.log('yo okoko! ');
open("http://localhost:13000");
let mot = new Mots()
console.log(mot.nom)
console.log(process.version);
console.log(os.cpus()[0].model);
console.log(os.hostname());
app.get('/', (req, res) => {

    // res.json(`coucou ${mot.nom}`)
    res.sendFile('/public/index.html', {
        root: __dirname
    })

})
server.listen(process.env.PORT || 13000,
    function initialisation() {
        console.log("Server en marche")
        // ildaatools.infoconsole()


    })