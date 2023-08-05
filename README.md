Assignment - Memory 
Objective

Build an interactive application to generate a 5 X 5 grid that simulates the game "concentration". 
Assignment Specification

•	The goal of the game is to match identical images by clicking on the grid cells three at a time
•	Out of the twenty-five cells, there will be eight different matching images. Each matching image applied to three grid cells
•	At the beginning of this game, twenty-four cells display the same default cover image while the last one displays a unique image used for resetting the game. By clicking the cells, the player will try to match three cells with the same image
•	The player is limited to clicking three default cover cells at any given time, clicking additional default cover cells should the three uncovered images failed to match, will not expose a fourth image 
•	If a match is found, the three cells will stay uncovered for the remainder of the game
•	Clicking on the exposed/matched cells will have no effect on either the progress nor the outcome of the game
•	If it is a mismatch, the three selected cells will stay exposed for two seconds. They will then once again show the default cover image
•	The game is over once all eight matches are found
•	The eight images must be randomly placed in the twenty-five cells using the Math.random() method at the start of each game
•	One starts a new game by refreshing the webpage via the clicking of the reset image or the browser’s reload button
Graphical Design Specification

The Webpage Heading

•	The heading is to display "Memory by <your name>"

The rest of the display area

•	Design your own webpage layout and colour scheme
•	Decide on the size and positioning of the form and elements yourself. Your design should be sensible and user friendly.
•	Create or download your own images from websites such as http://www.iconarchive.com/

HTML

•	Create and utilize a maximum of twenty-five <img> elements
•	The twenty-five <img> elements are to be situated in a 5 by 5 grid where each <img> element occupies a single grid cell
•	Each <img> element displays the default cover image, one of the assigned images or the single unique image for reset
•	All <img> elements showing the default cover images are click-able unless there are already three exposed but mismatched assigned images
•	All <img> elements showing the exposed and matched images will no longer be click-able
•	Usage of onclick attribute is prohibited
•	Usage of table related elements such as <table>, <tr> and <td> will render your assignment score as ZERO

CSS

•	The 5 by 5 grid is to be created by setting the CSS display property to grid with other grid-related properties
•	Setting the display property of the 5 by 5 grid to flex or other values is prohibited
•	Usage of CSS properties transition and transform are prohibited

JavaScript

•	The click event of the <img> elements are to be added/removed by the addEventListener and the removeEventListener methods
•	The two-second exposure limit of two unmatched images are to be handled by the window object’s setTimeout method
•	Usage of document object’s querySelector or querySelectorAll methods are prohibited

Deliverables
Additional Responsibilities
•	Your name must be coded in the comment section of your HTML file
•	Your assignment must pass the validation by the W3C HTML Validator and the W3C CSS Validator
•	Your assignment must be virus and malware free
•	Ensure you have handed in your latest version.
Assignment Submission
•	Submit your assignment by date specified on the course addendum via the submission link on Blackboard 
•	The completed assignment must include one .htm or .html file along with necessary image files and one external .css file and one external .js file
 
Note: This assignment is worth 25% of your final grade. 

IMPORTANT: This is not a group/team assignment and your assignment must be YOUR original work; plagiarism in any shape or form will render your assignment score as ZERO. You may be asked to explain how your assignment code works to demonstrate that it is indeed your original work.

Possible Assignment Outcome

 



 


 
