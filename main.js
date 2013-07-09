 navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById('geo').innerHtml = position.coords.latitude+','+position.coords.longitude;
        });      
