var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video");
	video.playbackRate *= 0.9
	console.log("Speed is ", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate /= 0.9
	console.log("Speed is ", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10
	video.loop = true
	console.log("Video current time is ", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function(){
	video.muted = !video.muted;
	document.querySelector("#mute").textContent = video.muted ? "Unmute" : "Mute";
	console.log(video.muted ? "Muted" : "Unmuted");
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	console.log("Volume is ", video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School Style");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original Style");
});
