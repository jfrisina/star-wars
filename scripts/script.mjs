// NOTE:
// I know how to use CSS and I am very comfortable with it, so I chose to practice my JS by doing all styling in JS. Just want to assure you that I did it intentionally to help me learn JS better! I know that styling is supposed to be done in the CSS!
//Known issues: 
// I tried to make the button stop scrolling once it reached the middle of the screen, but I couldn't get that to work. I was going to add the input after I figured it out.
// I could not get the text to be angled the way it is in the movies!!!! Drove me nuts!!!!!


// create variable to easily target button element
const button = document.querySelector("button");

// import scroll.mjs 
import { scrollText } from './scroll.mjs';
scrollText();

// import api.mjs
import { fetchData } from "./api.mjs";
fetchData();

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

const introSection = document.getElementById("intro-section");

// Apply styles to the container
introSection.style.transform = `rotateY(20deg)`;
introSection.style.transformOrigin = "bottom center";
introSection.style.overflow = "hidden";

// justify text 
const pTags = document.querySelectorAll("p"); 
 pTags.forEach(pTag => {
	pTag.style.textAlign = "justify";
 });

 // INPUT ---------------------------------------------------------------------------------
 const input = document.getElementById("input-type");
 input.style.padding = "3%";
 input.fontSize = "2rem";
 input.style.borderRadius = "50px";

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

// ALERT ----------------------------------------------------------------------------------			
// create function to use the API's returned variables in the alert
async function useData() {
    try {
        const { person, planet, starship } = await fetchData();

		// set up alert
		button.addEventListener("click", function() {
			const answer = document.getElementById("input-type").value;

			if (answer === "yes") {
				// create alert message
				const adventure = `You are going on an adventure to planet ${planet} with ${person} on the ${starship}.`
				alert(adventure);	
			} else if (answer === "no") {
				const mission = `You may work remotely supporting our adventurers.`
				alert(mission);
			} else {
				alert("You don't follow instructions so I don't trust you with a mission.")
			}

		});

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

useData();