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