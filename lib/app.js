'use strict';

document.addEventListener('DOMContentLoaded', function () {
	var width = document.getElementById('bubble-box').offsetWidth;
	var height = document.getElementById('bubble-box').offsetHeight;

	var i = 0;

	var createBubble = function createBubble() {
		//create random position
		var pos = Math.floor(Math.random(8) * 10) + 1;
		var b = new Bubble(width, height, pos, i);
		b.createSelf();
		b.move();

		//create up to 30 bubbles
		if (i < 30) {
			waitThenCreateBubble();
		}
	};

	var waitThenCreateBubble = function waitThenCreateBubble() {
		setTimeout(function () {
			createBubble();
			i++;
		}, 1000);
	};

	createBubble();
});