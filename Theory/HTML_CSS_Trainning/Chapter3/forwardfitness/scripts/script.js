/*
Stundent Name: Duc Vo
File Name: script.js
Date: 4/2/2025
*/


//Global variables
var video = document.getElementById("example")
var videoSource = document.getElementById("vid-src")
// var descriptionSource = document.getElementById("despsrc");


//Function to display the burpees example video
function burpees(){
    videoSource.src = "./media/rickroll.mp4";
    // descriptionSource.src = "media/burpees-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the plank example video
function plank(){
    videoSource.src = "./media/rickroll.mp4";
    video.style.display = "block";
    video.load();
}

//Function to display the moutain example video
function moutain(){
    videoSource.src = "./media/rickroll.mp4";
    video.style.display = "block";
    video.load();
}

// Hamburger menu function
function hamburger(){
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none"){
        menu.style.display = "none";
        logo.style.display = "block";
    }else{
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

//Function to display a promo code
function discount(){
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "PromoCode: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";

}


