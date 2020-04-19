var startpause = document.getElementById("startpause");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");
var lapBtn = document.getElementById("lap");
var resetlapBtn = document.getElementById("resetlap");
var lapContainer = document.querySelector(".lap");
var timer = document.getElementById("timer");
var time = 0;
var myInterval = -1;
var hour = document.getElementById("hr");
var minute = document.getElementById("min");
var second = document.getElementById("sec");
var mili = document.getElementById("ms");

startpause.addEventListener("click", togglePlay);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
resetlapBtn.addEventListener("click", resetlap);

function convertTime(milisec) {
	var hr = Math.floor(milisec/(60*60*100));
	var min = Math.floor(milisec/(60*100))%60;
	var sec = Math.floor(milisec/100)%60;
	var ms = milisec % 100;
	// return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + ":" + (ms < 10 ? "0" + ms : ms)
	hour.innerHTML = hr < 10 ? "0" + hr : hr;
	minute.innerHTML = min < 10? "0" + min : min;
	second.innerHTML = sec < 10 ? "0" + sec : sec;
	mili.innerHTML = ms < 10 ? "0" + ms : ms;
}

function getTimer(milisec) {
	var hr = Math.floor(milisec/(60*60*100));
	var min = Math.floor(milisec/(60*100))%60;
	var sec = Math.floor(milisec/100)%60;
	var ms = milisec % 100;

	return (hr < 10 ? "0" + hr : hr) + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + '<span id="ms">' + (ms < 10 ? "0" + ms : ms) + "</span>"
}

function togglePlay() {
	if(myInterval == -1) {
		startpause.innerHTML = "Pause";
		startpause.className = "btn btn-primary";
		myInterval = setInterval(function() {
			time++;
			// timer.innerHTML = convertSecond(time);
			convertTime(time);
		}, 10);
	} else {
		startpause.innerHTML = "Start";
		startpause.className = " btn btn-success";
		clearInterval(myInterval);
		myInterval = -1;
	}
};

function stop() {
	clearInterval(myInterval);
	myInterval = -1;
	time = 0;
	startpause.innerHTML = "Start";
	startpause.className = " btn btn-success";
	convertTime(time);
}

function reset() {
	stop();
	togglePlay();
};


function lap() {
	if(myInterval !== -1) {
		var li = document.createElement("li");
		li.innerHTML = getTimer(time);
		lapContainer.appendChild(li);
	}
}

function resetlap () {
	lapContainer.innerHTML = "";
}





