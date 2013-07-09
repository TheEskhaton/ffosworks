document.addEventListener('DOMContentLoaded', function(){
navigator.geolocation.getCurrentPosition(function(position) {
    document.write(position.coords.latitude +',' + position.coords.longitude);
});
});

