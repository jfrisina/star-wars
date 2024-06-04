// SCROLLING TEXT ---------------------------------------------------------------------------------

// justify text 
export const pTags = document.querySelectorAll("p"); // export for use in the main script.mjs file by adding "export" in front of the variable/function

 pTags.forEach(pTag => {
	pTag.style.textAlign = "justify";
 });

// function to make scrolling happen
export function scrollText() { // export for use in the main script.mjs file by adding "export" in front of the variable/function

	// set starting position for text using position on y-axis
	let yPos = 10; 

	// set scroll speed
	const scrollSpeed = 0.5;
		// Update the position by subtracting scrollSpeed from y-axis position. makes text move upwards.
    yPos -= scrollSpeed;

    // apply CSS transformation to the text to make it move up the y-axis.
    intro.style.transform = `translateY(${yPos}px)`;
}
