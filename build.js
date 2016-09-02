const NWB = require('nwjs-builder')

var exec = require('child_process').exec;
exec('cd src; npm install;');

NWB.commands.nwbuild(
	'src',
	{
		outputDir: 'build'
	},
	(err) => {

		if(err) throw err;
	}
)