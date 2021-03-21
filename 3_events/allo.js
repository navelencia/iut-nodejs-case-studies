const events = require('events');

// On crée un emitter
const emitter = new events.EventEmitter();

// On crée un handler pour l'evenement 'allo'
emitter.on('allo', () => {
    console.log(`- A l'huile !`);
})

// On émet l'évenement 'allo'
emitter.emit('allo');