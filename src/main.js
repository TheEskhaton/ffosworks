

document.addEventListener('DOMContentLoaded', function() {
    var hideLoader = function(){
        $$('loader').style.display = 'none';
    };
    var showLoader = function(){
        $$('loader').style.display = 'block';
    };
    hideLoader();
    $('.geo').addEventListener('click', function() {
        showLoader();
        navigator.geolocation.getCurrentPosition(function(position) {
            hideLoader();
            document.getElementById('content').innerHTML = position.coords.latitude + ',' + position.coords.longitude;
        });

        return false;
    });
    var count = 1;
    var person = new mozContact();
    person.givenName = ["John" + count];
    person.familyName = ["Doe"];

    var saving = navigator.mozContacts.save(person);

    var saving = navigator.mozContacts.save(person);
    $('.cont').addEventListener('click', function() {
        showLoader();
        var allContacts = navigator.mozContacts.getAll({
            sortBy: "familyName",
            sortOrder: "descending"
        });
        $$('content').innerHTML = "";
        allContacts.onsuccess = function(event) {

            var cursor = event.target;
            if (cursor.result) {
                $$('content').innerHTML += cursor.result.givenName[0] + " " + cursor.result.familyName[0] + '<br />';
                cursor.
                continue();
                hideLoader();
            } else {
                console.log("No more contacts");
            }
        }
        return false;

    });

});