'use strict';

function Timer(label) {
	this.label = label || 'Timer';
	this.start = process.hrtime();

}
Timer.prototype.print = function() {
	var hrend;
	var msg;

	hrend = process.hrtime(this.start);
	msg = ['>>>>>', 'Time spend for', this.label, 'was:', hrend[0], 'secs.'].join(' ');

	console.log(msg);
};

module.exports = Timer;