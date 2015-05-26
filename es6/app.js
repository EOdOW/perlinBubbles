document.addEventListener("DOMContentLoaded", function(){
	let width = document.getElementById('bubble-box').offsetWidth;
	let height = document.getElementById('bubble-box').offsetHeight;

	var i = 0;
	
	var createBubble = () => {
		//create random position
		let pos = Math.floor(Math.random(8) * 10) + 1;
		let b = new Bubble(width, height, pos, i);
		b.createSelf();
		b.move();

		//create up to 30 bubbles
		if (i < 30) {
			waitThenCreateBubble();
		}
	};
	
	var waitThenCreateBubble = () => {
		setTimeout(() => {
			createBubble();
			i++
		}, 1000);
	};

	createBubble();

});