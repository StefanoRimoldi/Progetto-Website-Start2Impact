document.addEventListener('DOMContentLoaded', () => {
    const btnsWatchVideo = document.querySelectorAll('.btn-watch-video');
    const videoContainer = document.querySelector('.video-container');
    const close = document.querySelector('.close');
    const video = document.querySelector('.video-container video');

    btnsWatchVideo.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const videoSrc = btn.getAttribute('data-video-src');
            video.setAttribute('src', videoSrc);
            videoContainer.classList.add('show-video');
            video.play();
        });
    });

    close.addEventListener('click', () => {
        videoContainer.classList.remove('show-video');
        video.pause();
    });
});