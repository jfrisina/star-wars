// SCROLLING TEXT ---------------------------------------------------------------------------------

// justify text 
export const pTags = document.querySelectorAll("p"); // export for use in the main script.mjs file by adding "export" in front of the variable/function

 pTags.forEach(pTag => {
	pTag.style.textAlign = "justify";
 });

// function to make scrolling happen
export function scrollText() { // export for use in the main script.mjs file by adding "export" in front of the variable/function
	// target element to scroll
	const intro = document.getElementById("intro");
	// set starting position for text using position on y-axis
	let yPos = 10; 

	// set scroll speed
	const scrollSpeed = 5;

	function scroll() {
		// Update the position by subtracting scrollSpeed from y-axis position. makes text move upwards.
		yPos -= scrollSpeed;

		// apply CSS transformation to the text to make it move up the y-axis.
		intro.style.transform = `translateY(${yPos}px)`;
		let animationID = requestAnimationFrame(scroll);
	}
scroll();
}
// Define a variable to store the ID returned by requestAnimationFrame
let animationID = requestAnimationFrame(scroll);

// Function to stop the button's scrolling animation when it reaches a certain point in the viewport
export function stopButtonScrolling() {
    const button = document.querySelector("button");

    function checkButtonPosition() {
        const buttonRect = button.getBoundingClientRect();
        const buttonTop = buttonRect.top;
        const buttonBottom = buttonRect.bottom;
        const viewportHeight = window.innerHeight;

        if (buttonTop <= viewportHeight / 2 || buttonBottom <= viewportHeight) {
            cancelAnimationFrame(scrollText);
        } else {
            requestAnimationFrame(checkButtonPosition);
        }
    }

    checkButtonPosition();
}

scrollText();
stopButtonScrolling();

