# lab-5-kah1an
lab-5-kah1an created by GitHub Classroom

Exercise 1--

Added my dachshund sprite function and then created an if statement in order to get the sprite to bounce off the walls in both the x and y direction. 
First I created variables for x, y, and speedX and speedY above the setup function. Then I initalised the variables, setting x and y to 0 and randomized 
speedX and speedY. Lastly, I created two if statements, one to have the sprite reverse it's speed if it hit the wall in the x direction and the other to 
have it reverse it's speed if it hit the wall in the y direction. I had to tweak around with my greater than and less than values here due to the irregular
shape of the sprite. https://editor.p5js.org/105-Kahlan/sketches/_bhmXZs1h

Exercise 2--

For exercise 2 everything was kept the same expect we were to add the keyPressed function so that when the arrow keys were pressed the sprite changed directions in whichever direction that corresponded with the arrow key that was pressed. I created a if/else if statement for the arrow keys and for the left and right arrow keys set speedX = speedX * -1 and for the up and down arrow keys set speedY = speedY * -1. That was it. https://editor.p5js.org/105-Kahlan/sketches/4MwTLf6AC
