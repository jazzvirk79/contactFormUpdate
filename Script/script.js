(function(){
"use strict";

console.log("app started....");

var homeParagraph = document.getElementById("home_para");
var projectParagraph = document.getElementById("project_para");
var projectParagraph1 = document.getElementById("project_para1");
var projectParagraph2 = document.getElementById("project_para2");
var projectParagraph3 = document.getElementById("project_para3");
var aboutParagraph = document.getElementById("about_para");
var aboutParagraph1= document.getElementById("about_para1");
var aboutParagraph2= document.getElementById("about_para2");
var contactParagraph = document.getElementById("contact_para");
var para = [];
para[0]="Welcome to my profile.";
para[1]=" Here are a few projects that I have created in my previous semester.";
para[2]="Hi I am Jagdeep Virk, a student of Software Engineering Technician at Centennial College.";
para[3]="I love to take pictures from my phone '#loveinstagram'.";
para[4]="Watching movies,listening songs,cartooning and dancing are some of my favorite hobbies.";
para[5]="Project# 1: Ferrari Spider 388";
para[6]="Project# 2: Energy Conservation";
para[7]="Project# 3: Real Estate";
para[8]="Contact Me";
if(homeParagraph){
homeParagraph.textContent = para[0];

}
if(projectParagraph){
projectParagraph.textContent = para[1];

	
}
if(projectParagraph1){
projectParagraph1.textContent = para[5];

	
}
if(projectParagraph2){
projectParagraph2.textContent = para[6];

	
}
if(projectParagraph3){
projectParagraph3.textContent = para[7];

	
}
if(aboutParagraph){
aboutParagraph.textContent = para[2];

	
}
if(aboutParagraph1){
aboutParagraph1.textContent = para[3];

	
}
if(aboutParagraph2){
aboutParagraph2.textContent = para[4];

	
}
if(contactParagraph){
contactParagraph.textContent = para[8];

	
}

})();
    // create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    
    // check to see if sendButton exists
    if(sendButton) {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }
    
    
    // event handler function
    function sendButtonClick(event) {
        console.log("clicked!");
    }
    
    // create a reference to the form fields
     var firstName = document.getElementById("firstName");
     var lastName = document.getElementById("lastName");
     var email = document.getElementById("email");
     var contactNumber = document.getElementById("contactNumber");
     var message = document.getElementById("message");
    // create a reference to the form
    var contactForm = document.getElementById("contactForm");
    
    
    if(contactForm) {
        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        });
    }
    
    /*This function shows the input from each form field 
     * on the console
     */
    function showFormInput() {
       
        console.log("First Name: " + firstName.value);
        
        console.log("Last Name: " + lastName.value);
       
        console.log("Email: " + email.value);
        
        console.log("Contact Number: " + contactNumber.value);
        
        console.log("Message: " + message.value);
      
    }
  
    
