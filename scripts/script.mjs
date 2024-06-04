// NOTE:
// I know how to use CSS and I am very comfortable with it, so I chose to practice my JS by doing all styling in JS. Just want to assure you that I did it intentionally to help me learn JS better! I know that styling is supposed to be done in the CSS!

// create variable to easily target button element
const button = document.querySelector("button");

// import scroll.mjs 
import { pTags, scrollText } from './scroll.mjs';

// import api.mjs
import { fetchData as api} from "./api.mjs";
api();

// GENERAL ---------------------------------------------------------------------------------
// add space background
document.body.style.background = "url(./images/stars-bg.jpg)";

// SCROLLING -------------------------------------------------------------------------------
// set general website font styles
document.body.style.color = "#DFDA3B";
document.body.style.fontFamily = "Nanum Gothic, sans-serif";
document.body.style.fontWeight = "800";
document.body.style.letterSpacing = "8%";

// target the scrolling text
const intro = document.getElementById("intro");

// style the scrolling text
intro.style.textAlign = "center";
intro.style.width = "80%";
intro.style.margin = "auto";
intro.style.fontSize = "3rem";
intro.style.lineHeight = "1.4";
intro.style.position = "relative";
intro.style.top = "650px";

 // BUTTON ---------------------------------------------------------------------------------
// style button
button.style.marginTop = "2rem";
button.style.padding = "1rem 2rem";
button.style.backgroundColor = "#DFDA3B"
button.style.border = "none";
button.style.borderRadius = "50px";
button.style.fontWeight = "bold";
button.style.fontSize = "18px";

// center align the button
const buttonDiv = document.getElementById("button-div");
buttonDiv.style.textAlign = "center";

// loop to check if the 
// checks to see if the button is at the halfway point yet
if (button.getBoundingClientRect().top <= window.innerHeight / 2) {
	// if yes, then stop button from scrolling
	cancelAnimationFrame(scrollText);
} else {
	// if no, then continue scrolling the text
	requestAnimationFrame(scrollText);
}

// ALERT ----------------------------------------------------------------------------------			
// create alert message
const adventure = `You are going on an adventure to planet ${planet} with ${person} on the ${starship}.`

// set up alert
button.addEventListener("click", function() {
	alert(adventure);
});

