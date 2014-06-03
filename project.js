var randomx = 400;

// put variables here, just like kahn academy
//  var img = processing.loadImage("Fab.jpg");

var counter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

var exampleVar = 10;
//var pig = processing.rect(30, 20, mouseX, mouseY);
var x = 100;
var y = 460;
var xdirection = 1;
var cherryY = 15;
var music;

// put functions here, just like kahn academy
var exampleFunction = function() {
    rect(30, 20, 80, 80)	;
};
var counter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];


// this code is executed once when the program is started
var  setup = function() {

    b = loadImage("barn1.jpg");
    pig = loadImage("pig.png");
    cherry = loadImage("CanOfSoup.png");
    
    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);

    var setup = function() {

    };
    var keyIsPressed = false;

    var  keyPressed = function() {
	keyIsPressed = true;
    }

    var keyReleased = function() {
	keyIsPressed = false;
    }
}
var draw = function() {
	music = new Audio("SSSU.mp3");
	music.controls = true;
	music.loop = true;
	music.autoplay = true;
	document.body.appendChild(music);

}

var draw = function() {
    
    if (Math.random() < 0.01) {
	xdirection = xdirection*-1;
    }
    randomx += xdirection;
    cherryY += 1;
    image(b, 0, 0);

    textSize(43);
    text(counter[9], 44, 53);
    textSize(18);
    text("POINTS", 23, 20);

    image(cherry, randomx, cherryY);
    
    if(cherryY > 600) {
	cherryY = cherryY - 600;
    }

    if(x > 0 && keyIsPressed && keyCode == LEFT ) {
	x = x - 33;
    }

    if(x < 700 && keyIsPressed && keyCode == RIGHT ) {
	x = x + 33;
    }

    //	    y = processing.mouseY;

    //	}

    image(pig, x, y);

    
    
    
}



