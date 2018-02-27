// Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    
    // Create a request
    var request = new XMLHttpRequest();
    console.log("workign 1");
     
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        console.log("workign 2");
        if (request.readyState === XMLHttpRequest.DONE) {
            // Take some action
            console.log("workign 3" + request.status);
            if (request.status === 200){
                 var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
        
    };
    
   // Make the request
   // AS the request is made through local host - The access cannont be granted to counter while running the app
   request.open('GET', 'http://jackofalltradesprogrammer.imad.hasura-app.io/counter', true);
   request.send(null);

};