var internetradio = require('node-internet-radio');
const exec = require('child_process').exec;

var testStream = "http://streaming.radionomy.com/PassionLoveRadio";

exec('wget -O - ' + testStream + ' | madplay -', (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
	console.log(`stderr: ${stderr}`);
});
	
internetradio.getStationInfo(testStream, function(error, station) {
	console.log(station);
});
