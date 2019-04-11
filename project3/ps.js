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

// BASKET PARAMS
var basket_loc = {x:0,y:0}; //basket's coordinates
document.addEventListener("mousemove", getMouse);  //make it listen for the mouse location

function getMouse(e){
	basket_loc.x = e.pageX; //update the basket coordinates with the mouse's coordinates
	basket_loc.y = e.pageY;
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


    // Check if it is in bounds
    // If it is past the left or right side of the screen..
    if( x<0 || x>1425){
      // Reverse the speed of the ball, don't think we will need this...
      dx=-dx;
	  }  
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
	
    var diffX = Math.abs(x - basket_loc.x); 
    var diffY = Math.abs(y - basket_loc.y); 
    if(diffX >= 0 && diffX <= 30 && diffY >= 0 && diffY <= 8){
	window.alert("Yay!");
    }

}
	

setInterval(dropItem,10);
