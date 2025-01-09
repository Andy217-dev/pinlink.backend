const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const API_PORT = 2046
const app = express()
const cors = require('cors')

//Controllers
const AIController = require('./controllers/AIController')
const OController = require('./controllers/OController')

var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/', OController);
app.use('/api', AIController);

app.get("/", (req, res) => {
    res.send("Express on Vercel, yay");
});

app.listen(API_PORT, () => {
    console.log(`LISTENING ON PORT ${API_PORT}`)
})

io.on('connection', (socket) => {
    console.log('new client connected');
    socket.emit('connection', null);
});
