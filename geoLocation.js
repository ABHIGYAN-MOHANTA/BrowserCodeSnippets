if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  console.log("Geolocation is not supported by this browser.");
}

function successCallback(position) {
  console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);
}

function errorCallback(error) {
  console.log("Error occurred while getting location: " + error.message);
}
