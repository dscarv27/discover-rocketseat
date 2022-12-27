const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) =>{
    console.log('eu ouvi você,', message, "!")
})

ev.emit('saySomething', "daniel")
ev.emit('saySomething', "camila")
ev.emit('saySomething', "mayk")

ev.once('saySomething', (message) =>{
    console.log('ouvi você apenas uma vez,', message, "!")
})

ev.emit('saySomething', "ev.emit")