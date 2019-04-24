// Where things are being drawn
var canvas;
// BALL PARAMS
var dx = 3; //change back to .25 for the game
var dy = 3; //change back to .25 for the game
// start position
var y = 0;
var x = Math.random() * 1400;
var count = 0;
// Ball color
var rand_color = Math.floor(Math.random() * 6);
// Basket Color
var basket = Math.floor(Math.random() * 6);
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

var e = window.event;

var score = 0;
var lives = 3;

function drawScore() {
    canvas.font = "24px Arial";
    canvas.fillStyle = "#000000";
    canvas.fillText("Score: "+ score, 8, 20);
}

function drawLives() {
    canvas.font = "24px Arial";
    canvas.fillStyle = "#000000";
    canvas.fillText("Lives: "+ lives, 8, 40);
}

function drawControls() {
    canvas.font = "24px Arial";
    canvas.fillStyle = "#000000";
    canvas.fillText("Press P to move right", 8, 65);
    canvas.fillText("Press Q to move left", 8, 90);
}

function gameOver(){
  canvas.font = "48px Arial";
  canvas.fillStyle = "#000000";
  canvas.fillText("Game Over", 600, 350);
  canvas.fillText("Final Score:" + score, 575, 400);
}

// BASKET PARAMS
var basket_loc = {x:0,y:0}; //basket's coordinates

// MOUSE CONTROL
// document.addEventListener("mousemove", getMouse);  //make it listen for the mouse location
// function getMouse(e){
// 	basket_loc.x = e.pageX; //update the basket coordinates with the mouse's coordinates
// 	basket_loc.y = 710;
// }	

// document.addEventListener("switchcontrol", switchControl);  //make it listen for the mouse location
// function switchControl(e) {
//   basket_loc.y = 710;
//   this.addEventListener('keypress', (e) => {
//     if (e.keyCode == 13) {
//         basket_loc.x = x;
//     }
//   })
// }

// KEYBOARD CONTROL
basket_loc.x = 200;
basket_loc.y = 710;

function handleEnter(e){    
    var keycode = e.key;
    // Enter Key
    if (keycode == "p") {
        // Move the basket a little to the right
        basket_loc.x += 25;
      // Keep the basket on the screen 
      if (basket_loc.x > 1425) {
        basket_loc.x = 1390;
      }
    }
    // Z key?	
	else if (keycode == "q") {
      // Move the basket a little to the left
      basket_loc.x -= 25;
      // Keey the basket on the screen
      if (basket_loc.x < 0) {
        basket_loc.x = 35;
      }
    }
}


function getScore(){
  var diffX = Math.abs(x - basket_loc.x); 
  var diffY = Math.abs(y - basket_loc.y); 
  // Catch the ball
  if(diffX >= 0 && diffX <= 30 && diffY >= 0 && diffY <= 8 && basket == rand_color){
    score = score + 10;
    // window.alert("Yay!");
    y = 740;
    x = Math.random() * 1400; 
    dy += .5; //Increate the speed of the falling object
  }
  // Caught the wrong ball
  if(diffX >= 0 && diffX <= 30 && diffY >= 0 && diffY <= 8 && basket != rand_color){
    score -= 10;
    lives -= 1;
    // window.alert("oops!");
    y = 740;
    x = Math.random() * 1400; 
  }
  // Miss the ball
  if(y > 730 && diffX > 30 && (diffY > 0 || diffY > 8) && colors[basket] == colors[rand_color]) {
    lives -= 1;
    score -= 10;
  }

  if(lives == 0) {
    gameOver();
    x = -40;
    y = -40;
    dx = 0;
    dy = 0;
    }

}
 
function dropItem(){
    // Where the item appears
    canvas= myCanvas.getContext('2d');
    canvas.clearRect(0,0,1425,750);
    // Draw the circle
    canvas.beginPath();
    canvas.fillStyle=colors[rand_color];
    canvas.arc(x,y,10,0,Math.PI*2);
    canvas.closePath();
    canvas.fill();

    //Draw the catcher
    canvas.beginPath();
    canvas.fillStyle=colors[basket];
    canvas.arc(basket_loc.x,basket_loc.y,35,0,Math.PI);
    canvas.closePath();
    canvas.fill();

    // If it is on the top of the screen or below the bottom
    if( y<0 || y>730){
      // Reverse the speed
      dy=-dy;
  	  y = 0;
  	  x = Math.random() * 1400; 
      rand_color = Math.floor(Math.random() * 6);
	  }  
      // change the position
    x = x;
    y += dy;
	
    getScore();
    drawScore();
    drawLives();
	drawControls();
}

setInterval(dropItem,10);
