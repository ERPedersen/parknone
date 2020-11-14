const { Gpio } = require('onoff');

// Set GPIO X as output
const connection = new Gpio(23, 'out');

connection.writeSync(Gpio.HIGH);

setTimeout(function () {
  connection.writeSync(Gpio.LOW);
}, 1000);
