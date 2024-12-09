const fullscreenButton = document.getElementById("fullscreen-button");



fullscreenButton.addEventListener("click", function() {

  const element = document.documentElement;

  if (element.requestFullscreen) {

    element.requestFullscreen();

  } else if (element.mozRequestFullScreen) {

    element.mozRequestFullScreen();

  } else if (element.webkitRequestFullscreen) {

    element.webkitRequestFullscreen();

  } else if (element.msRequestFullscreen) {

    element.msRequestFullscreen();

  }

});



// Optional: Add event to exit full screen when needed

document.addEventListener("fullscreenchange", function() {

  if (!document.fullscreenElement) {

    // Do something when exiting full screen

  }

});
