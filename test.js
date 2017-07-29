var internetradio = require('node-internet-radio');
const exec = require('child_process').exec;

exec('wget -O - http://streaming.radionomy.com/PassionLoveRadio | madplay  -', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

var testStream = "http://streaming.radionomy.com/PassionLoveRadio";
internetradio.getStationInfo(testStream, function(error, station) {
  console.log(station);
});
