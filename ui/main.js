// Counter code
var button = document.getElementById('counter');
button.onclick = function () {
    
    // Create a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            // Take some action
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
    
    // Make the request - localhost machine cannot access the counter from the url - no authentication
    request.open('GET', 'http://jackofalltradesprogrammer.imad.hasura-app.io/counter', true);
    request.send(null);
};

//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    // Make a reuest to the server and send the name
    // Create a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            // Take some action
            if (request.status === 200){
                // Capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i< names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;   
            }
        }
        
    };
    
    // Make the request - localhost machine cannot access the counter from the url - no authentication
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://jackofalltradesprogrammer.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    // Capture a list of names and render it as a list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i=0; i< names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};