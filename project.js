var randomx = 400;

// put variables here, just like kahn academy
//  var img = processing.loadImage("Fab.jpg");

var speed = 5

var exampleVar = 10;
//var pig = processing.rect(30, 20, mouseX, mouseY);
var x = 100;
var y = 460;
var xdirection = 1;
var cherryY = 15;
// put functions here, just like kahn academy


var counter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];



// this code is executed once when the program is started
var  setup = function() {
    b = loadImage("barn1.jpg");
    pig = loadImage("piggy.png");
    cherry = loadImage("CanOfSoup.png");
    gameOver = loadImage("Gameover.png");
    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);

    
    
};
var keyIsPressed = false;

var  keyPressed = function() {
    keyIsPressed = true;
}

var keyReleased = function() {
    keyIsPressed = false;
}



var draw = function() {

    if (Math.random() < 0.01) {
	xdirection = xdirection*-1;
    }
    randomx += xdirection;
    cherryY += 1;
    image(b, 0, 0);
    image(cherry, randomx, cherryY);
    
    if(cherryY > 600) {
	cherryY = cherryY -9;
    }

    if(x > 0 && keyIsPressed && keyCode == LEFT ) {
	x = x - 33;
    }

    if(x < 700 && keyIsPressed && keyCode == RIGHT ) {
	x = x + 33;
    }

   
    image(pig, x, y);
    textSize(43);
    text(counter[9], 44, 53);
    textSize(18);
    text("POINTS", 23, 20);
  
//   if(cherryY > 600) {
//	speed = - 45;
 //   }



    
  

};