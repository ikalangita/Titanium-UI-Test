
function aClick(e) {
	
	var animation = require('alloy/animation');
	animation.shake($.apropos);
}

function bClick(e){
	var win = Alloy.createController("bienvenue").getView();
	win.open();
}

$.index.open();