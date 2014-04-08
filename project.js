var randomx = 400;

// put variables here, just like kahn academy
//  var img = processing.loadImage("Fab.jpg");



var exampleVar = 10;
//var pig = processing.rect(30, 20, mouseX, mouseY);
var x = 100;
var y = 460;
var xdirection = 1;
var cherryY = 15;
// put functions here, just like kahn academy
var exampleFunction = function() {
    rect(30, 20, 80, 80)	;
};


// this code is executed once when the program is started
var  setup = function() {
    b = loadImage("barn1.jpg");
    pig = loadImage("piggy.png");
    cherry = loadImage("cherry1.png");
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
    
    

    if(x > 0 && keyIsPressed && keyCode == LEFT ) {
	x = x - 33;
    }

    if(x < 700 && keyIsPressed && keyCode == RIGHT ) {
	x = x + 33;
    }

    //	    y = processing.mouseY;

    //	}

    image(pig, x, y);

    if (x > 700) {
	image(gameOver, 0, 0);
    }

    
	

    
  

};