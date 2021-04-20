var video = document.querySelector('.WaxomVideo');
var juice = document.querySelector('.WaxomVideo');
var bth = document.getElementById('.play-pause');
var bth = document.getElementById('.icon-play');

function togglePlayPause(){
    if(video.paused){
        bth.className = 'pause'
        video.play()

    }
    else {
        bth.className= "play";
        video.pause();
    }
}
    bth.onclick= function () {
        alert("play!");
    }

    video.addEventListener("tieupdate",function(){
        var juicePos = videp.currentTime / video.duraion;
      juice.style.width = juicePos * 100 + "%" ;});
    }
    
