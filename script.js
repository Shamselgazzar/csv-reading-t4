console.log("Hello Hello!");
/*
function changeVideo(videoSrc) {
    const videoElement = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');

    videoSource.src = videoSrc;
    videoElement.load();
    videoElement.play();
}
*/

function changeVideo(videoId) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
}