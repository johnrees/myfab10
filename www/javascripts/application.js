// Display the native navigation bar with the title "Hello World!"
// steroids.view.navigationBar.show("Hello World!");

// Set the WebView background color to white (effective on iOS only)
// steroids.view.setBackgroundColor("#FFFFFF");

window.map = null;

Zepto(function($){
  window.map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i86knfo3/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(window.map);
})

// function cameraGetPicture() {
//   navigator.camera.getPicture(imageReceived, cameraFail, {
//     quality: 100,
//     destinationType: Camera.DestinationType.FILE_URI,
//     correctOrientation: true,
//     targetWidth: 600
//   });
// }
// function imageReceived(imageURI) {
//   var image = $('img#myImage');
//   image.src = imageURI;
// }

// function cameraFail(message) {
//   alert("Camera error: " + message);
// }