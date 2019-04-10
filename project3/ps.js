// Where things are being drawn
var canvas;
// speed
var dx= .25;
var dy=.25;
// start position..?
var y=0;
var x=10;

function dropItem(){
    // Where the item appears
    canvas= myCanvas.getContext('2d');
    canvas.clearRect(0,0,1425,750);
    canvas.beginPath();
    // Draw the circle
    canvas.fillStyle="black";
    canvas.arc(x,y,10,0,Math.PI*2,true);
    canvas.closePath();
    canvas.fill();

    // Check if it is in bounds
    // If it is past the left or right side of the screen..
    if( x<0 || x>1425)
      // Reverse the speed of the ball, don't think we will need this...
      dx=-dx;
    // If it is on the top of the screen or below the bottom
    if( y<0 || y>750)
      // Reverse the speed
      dy=-dy;
      // change the position
      x+=dx;
      y+=dy;
    }
setInterval(dropItem,10);