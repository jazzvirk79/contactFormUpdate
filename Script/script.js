// <reference path="objects/label.ts"/>
/// <reference path="objects/button.ts"/>
/**
 * FileName: script.js
 *
 * @author Jagdeep Virk
 * @date August 20, 2016
 *
 * StudentID: 300869382
 *
 * @description This file is the main javascript file for the web site
 */
var core;
(function(){
"use strict";
 var canvas;
    core.CANVAS_WIDTH = 320;
    core.CANVAS_HEIGHT = 320;
    var stage;
    var helloLabel;
    var yDirection = 1;
    var xDirection = 1;
    var dy = 1;
    var dx = 1;
    var clickMeButton;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        canvas.setAttribute("width", "320");
        canvas.setAttribute("height", "320");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // enable mouse over events
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        // after everything is set up - call main
        main();
    }
    /**
     * Utility Method to set the bounds of an object
     *
     * @param {number} axis
     * @param {number} boundary
     * @returns {number}
     */
    function checkBounds(axis, boundary) {
        if (axis >= boundary) {
            axis = boundary;
        }
        if (axis <= 0) {
            axis = 0;
        }
        return axis;
    }
    /**
     * Event method that triggers every frame
     *
     * @method gameLoop
     */
    function gameLoop() {
        //helloLabel.rotation += 5;
        // checkbounds for x and y
        helloLabel.x = checkBounds(helloLabel.x, core.CANVAS_WIDTH);
        helloLabel.y = checkBounds(helloLabel.y, core.CANVAS_HEIGHT);
        // change direction and speed for x and y
        if ((helloLabel.y == core.CANVAS_HEIGHT) || (helloLabel.y == 0)) {
            dy = Math.floor(Math.random() * 5) + 1;
            yDirection *= -1;
        }
        if ((helloLabel.x == core.CANVAS_WIDTH) || (helloLabel.x == 0)) {
            dx = Math.floor(Math.random() * 5) + 1;
            xDirection *= -1;
        }
        helloLabel.y += (yDirection * dy);
        helloLabel.x += (xDirection * dx);
        stage.update(); // refresh the stage container
    }
    function clickMeButton_clicked() {
        helloLabel.text = (helloLabel.text === "My Projects") ? "Created in Sem1" : "My Projects";
    }
    // everything happens here
    function main() {
        // label object
        helloLabel = new objects.Label("My Projects", "40px Consolas", "#000000", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(helloLabel);
        // button bitmap
        clickMeButton = new objects.Button("../Assets/images/clickMeButton.png", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(clickMeButton);
        clickMeButton.on("click", clickMeButton_clicked);
    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})(core || (core = {}));
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
  
    
