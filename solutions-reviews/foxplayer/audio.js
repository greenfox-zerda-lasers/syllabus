/**
 * Audio module
 * by Tibor
 * Methods
 *  - load( url )
 *  - play
 *  - pause
 *  - seek
 *  - volume( 0-100 )
 * Events
 *  - timeupdate: fires when music is playing
 *  - ended: fires when currentTime is duration
 */
var audio = (function () {
	var audioNode = document.createElement('audio');
	var timeCallback = function(){};
	var endCallback = function(){};

	audioNode.addEventListener('timeupdate', function(){
		timeCallback(audioNode.currentTime);
	});

	audioNode.addEventListener('ended', function(){
		endCallback();
	});

	function setUpdateEvent( cb ) {
		timeCallback = cb;
	}

	function setCompleteEvent( cb ) {
		endCallback = cb;
	}

	function load( url ) {
		audioNode.src = url;
	}

	function play(){
		audioNode.play();
	}

	function pause(){
		audioNode.pause();
	}

	// expects between 0-100 value
	function seek( percent ){
		audioNode.currentTime = audioNode.duration * percent / 100;
	}

	return {
		load: load,
		play: play,
		pause: pause,
		seek: seek,
		onUpdate: setUpdateEvent,
		onComplete: setCompleteEvent
	}
})();
