$(document).ready(function(){

	// Initalize scroll magic, this basically tells browser to do something when use scrolls
	var controller = new ScrollMagic.Controller();

	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '80%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller)

	
	$('.project').each(function(){
		// Builds a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			// duration: '100%',
			// triggerHook: .9,
			// reverse: false
		})
		.setClassToggle(this, 'fade-in')
		.addIndicators({
			name: 'fade-in',
			colorTrigger: 'blue',
			indent: 300,
			colorStart: 'green',
			colorEnd: 'pink'
		})
		.addTo(controller) //'fade-in' is the class we want to add 
	})


});


















