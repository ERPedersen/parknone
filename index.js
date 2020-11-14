const { Gpio } = require( 'onoff' );

// Set GPIO X as output
const connection = new Gpio( 23, 'out' );

// Send high
connection.writeSync(Gpio.HIGH);

// Wait 1000 ms
setTimeout(function () {
  // Send low
  connection.writeSync(Gpio.LOW);
}, 500);
