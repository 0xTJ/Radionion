var internetradio = require('node-internet-radio');
//const exec = require('child_process').exec;
var sleep = require('sleep');
var oledExp = require("/usr/bin/node-oled-exp");
const delay = require('delay');

var streamURL = "http://streaming.radionomy.com/PassionLoveRadio";

//exec('wget -O - ' + streamURL + ' | madplay  -', (error, stdout, stderr) => {
//  if (error) {
//    console.error(`exec error: ${error}`);
//    return;
//  }
//  console.log(`stdout: ${stdout}`);
//  console.log(`stderr: ${stderr}`);
//});

oledExp.init();
oledExp.setColumnAddressing(63,95);
oledExp.scroll(0, 0, 0, 7);

internetradio.getStationInfo(streamURL, function(error, station) {
  oledExp.setTextColumns();
  oledExp.setCursor(0, 5);
  oledExp.write(station.title);
  while(true) {
    delay(1000);
    oledExp.write(station.title);
  }
});
