import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));



///* eslint-disable node/no-missing-require */

/**
 * This is a small example app to turn off and on
 * the built-in LED of an arduino by data sent
 * from the browser with socket.io.
 */

// Initialize application constants
//const bodyParser = require("body-parser")
//const app = require('express')()
//const http = require('http').Server(app)
//const io = require('socket.io')(http)
//const tcpPort = process.env.PORT || 3000
//app.use(bodyParser.urlencoded({extended: true}));
const SerialPort = require('serialport')

const port = new SerialPort('/dev/tty.usbmodem02691', {
    baudRate: 9600,
})

const byteParser = new SerialPort.parsers.ByteLength({length: 1})
port.pipe(byteParser)

/* ===========================================
*
* Setup a simple server.
*
=========================================== */

//app.get('/', (req, res) => {
//    res.sendfile('index.html')
//})
//
//app.post('/po', (req, res) => {
//    console.log('--->po: ${req.body.cha}')
//    res.send(req.body.cha)
//})
//
//http.listen(tcpPort, () => {
//    console.log(`listening on http://localhost:${tcpPort}`)
//})

/* ===========================================
*
*  Socket.io stuff
*
=========================================== */


/* ===========================================
*
* Serialport stuff
*
=========================================== */

port.on('open', () => {
    console.log('Port is open!')
})

/**
 * listen to the bytes as they are parsed from the parser.
 */
//byteParser.on('data', data => {
//    let message
//    message = data;
//
//    io.sockets.emit('new message', message)
//})

port.on('close', () => {
    console.log('Serial port disconnected.')
//    io.sockets.emit('close')
})
