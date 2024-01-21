/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ahmadou Sy Student ID: 138005236 Date: 01/20/2024
*
********************************************************************************/ 
//console.log("Hello World")
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"]
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"]
const serverResponses = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Ahmadou Sy", 
                    "Ahmadou Sy: asy2@myseneca.ca","User Logged In", "Main Panel","Logout Complete"]


function httpRequest(httpVerb, path){
    for (var i = 0; i < serverPaths.length; i++){
        if(httpVerb == serverVerbs[i] && path == serverPaths[i]){
            return `200: ${serverResponses[i]}`
        }

}
    return `404: Unable to process ${httpVerb} request for ${path}`

}

// Step 5 manual testing
console.log(httpRequest("GET", "/")); // shows "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // shows "200: This Assignment was prepared by Student Name" 
// and so on, including a "404" error:
console.log(httpRequest("PUT", "/")); // shows "404: Unable to process PUT request for /"


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function automateTests(){
    const testVerbs = ["GET", "POST"]
    const testPaths =  ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"]
    
    function randomRequest(){
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }
    setInterval(randomRequest, 1000);
}

automateTests();