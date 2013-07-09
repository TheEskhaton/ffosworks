document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.geo').addEventListener('click', function(){
            navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById('content').innerHTML = position.coords.latitude +',' + position.coords.longitude;
        });

        return false;
    });
    var count = 1;
    document.querySelector('.cont').addEventListener('click', function(){
    var person = new mozContact();
    person.givenName  = ["John"+count];
    person.familyName = ["Doe"];

    var saving = navigator.mozContacts.save(person);

    saving.onsuccess = function() {
        console.log('new contact saved');
        person = saving.result;
        count++;
 var allContacts = navigator.mozContacts.getAll({sortBy: "familyName", sortOrder: "descending"});
document.getElementById('content').innerHTML = ""; 
    allContacts.onsuccess = function(event) {
        var cursor = event.target;
        if (cursor.result) {
            document.getElementById('content').innerHTML += cursor.result.givenName[0] + " " + cursor.result.familyName[0] +'<br />';
            cursor.continue();
        } else {
            console.log("No more contacts");
        }
    }

    };
        
       
        
        return false;
    
    });    
    
});

