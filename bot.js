// Boilerplate developed by Will Sheare for Aquaco Water Recycling Limited. It is untested, but a basic boilerplate to worked on to help with the development
// or a basic smart attenuation system

var global = require('./globals');

var rss = require('./lib/metofficeRSS');


setTimeout(function () { // run checking cycle
  rss.checkWeather()
  setInterval(rss.checkWeather, 1000 * 60 * 60 * global.frequency); // converts minutes into milliseconds for working with node.
}, 5000);
