// Where things are being drawn
var canvas;
// speed
var dx = 3; //change back to .25 for the game
var dy = 3; //change back to .25 for the game
// start position..?
var y = 0;
var x = Math.random() * 1400;
var count = 0;
var rand_color = Math.floor(Math.random() * 6);
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
 
function dropItem(){
    // Where the item appears
    canvas= myCanvas.getContext('2d');
    canvas.clearRect(0,0,1425,750);
    canvas.beginPath();
    // Draw the circle
    canvas.fillStyle=colors[rand_color];
    canvas.arc(x,y,10,0,Math.PI*2);
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
}
	

setInterval(dropItem,10);
