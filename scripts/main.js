//Running a query selector. Bada-bing, bada-boom
var submit = document.querySelector('.loadingButton');
//Creating an IntervalID for later
var delay;

//Starting the Event listener
submit.addEventListener('click', loadingTimer);
function loadingTimer() {
	//First thing it should do is change the text in the button
	submit.innerHTML = 'Loading...';
	delay = setInterval(function() {
		//Once the delay is up, it should change the text back to 'Submit'
		submit.innerHTML = 'Submit';
		//Once it's changed the button text, the interval's should stop
		if (submit.innerHTML === 'Submit') {
			clearInterval(delay);
		}
	}, 1000);
}