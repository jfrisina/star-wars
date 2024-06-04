// GENERAL
// add space background
document.body.style.background = "url(./images/stars-bg.jpg)";

// center align page content
document.body.style.textAlign = "justified";

// SCROLLING TEXT ---------------------------------------------------------------------------------
document.body.style.color = "#DFDA3B";
document.body.style.fontFamily = "Nanum Gothic, sans-serif";
document.body.style.fontWeight = "800";
document.body.style.letterSpacing = "8%";


const intro = document.getElementById("intro");
intro.style.margin = "auto";
intro.style.perspective = "1000px";
intro.style.height = "100vh";
intro.style.overflow = "hidden";
intro.style.position = "absolute";
intro.style.top = "5%";
intro.style.left = "0";
intro.style.transformOrigin = "50% 100%";
intro.style.animation = "crawl 60s linear infinite";
intro.style.fontSize = "3rem";

// Define the angle of rotation and initial position
let angle = 5;
let yPos = 20;

// Define the speed of introBodying (adjust as needed)
const scrollSpeed = .05;

function animateText() {    
    // Update the position
    yPos -= scrollSpeed;

    // Apply transformation to the text for vertical scrolling
    intro.style.transform = `translateY(${yPos}%) rotateX(40deg)`;

    // Loop the animation
    requestAnimationFrame(animateText);
}

animateText();


// BUTTON ---------------------------------------------------------------------------------
const button = document.querySelector("button");
button.addEventListener("click", function() {
	alert("Button clicked!");
});
button.style.marginTop = "2rem";
button.style.padding = "1rem 2rem";
button.style.backgroundColor = "#DFDA3B"
button.style.border = "none";
button.style.borderRadius = "50px";
button.style.fontWeight = "bold";
button.style.fontSize = "18px";

// API ------------------------------------------------------------------------------------


// create function for grabbing all of the data
async function getDataFor(endpoint) {
	const result = await fetch (`https://www.swapi.tech/api/${endpoint}/`);
	const data = await result.json();
	return data;
}

// get data from all Star Wars API endpoints 
async function fetchData() {
	try {
	// fetching all endpoint data concurrently
	const filmsPromise = getDataFor("films");
	const peoplePromise = getDataFor("people");
    const planetsPromise = getDataFor("planets");
	const speciesPromise = getDataFor("species");
	const starshipsPromise = getDataFor("starships");
	const vehiclesPromise = getDataFor("vehicles");

	// lets them resolve - this is suppose to be faster than me putting the two steps together - let me know if you disagree, cos this way seems tedious, but I wanted to use async/await instead of promises
	const filmsData = await filmsPromise;
	const peopleData = await peoplePromise;
    const planetsData = await planetsPromise;
	const speciesData = await speciesPromise;
	const starshipsData = await starshipsPromise;
	const vehiclesData = await vehiclesPromise;
	console.log(filmsData);
	console.log(peopleData);
	console.log(planetsData);
	console.log(speciesData);
	console.log(starshipsData);
	console.log(vehiclesData);
 	} catch (error) {
		console.error("The following droid could not be found:", error);
	}
  }
  
  fetchData();



  	// // Loops through the list of pokemon fetched from the api
	// for (let i = 0; i < data.results.length; i++) {
	// 	// create a new h1 element
	// 	const nameDisplay = document.createElement("h1");
	
	// 	// sets the text of the element to pokemons name
	// 	nameDisplay.innerText = data.results[i].name;
	
	// 	// displays the element by appending it to the body
	// 	document.querySelector("body").appendChild(nameDisplay);
	//   }