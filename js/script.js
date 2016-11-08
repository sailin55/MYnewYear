window.onload = function() {
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

	audio.addEventListener("ended", function(event) {
		music.setAttribute("class", "");
	}, false);

	//点击光盘，切换音乐播放状态
	/*music.onclick=function(){
		if (audio.paused) {
			audio.play();
			this.setAttribute("class","play");
		}else{
			audio.pause();
			this.setAttribute("class","");
		};
	};*/

	music.addEventListener("touchstart",
		function(event) {
			if (audio.paused) {
				audio.play();
				this.setAttribute("class", "play");
			} else {
				audio.pause();
				this.setAttribute("class", "");
			};
		}, false);
};
