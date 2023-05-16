
function makeRGB(redInput, greenInput, blueInput) {
    let redOutput = redInput ?? random(255);
    let greenOutput = greenInput ?? random(255);
    let blueOutput = blueInput ?? random(255);
  
    return `rgb(${redOutput}, ${greenOutput}, ${blueOutput})`;
}

function random() {
    switch(arguments.length){
        case 0:
            return Math.random();
            break;
        case 1: 
            return Math.random() * arguments[0];
            break;
        case 2: 
            return arguments[0] + Math.random()*(arguments[1] - arguments[0]);
            break;
        default:
            console.error("too many arguments passed to random()");
            break;

    }
    }

// This function creates a white circle SVG element
// Input:
//    x - the x-position
//    y - the y-position
//    radius - the radius of the circle
function makeCircle(x, y, radius) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", Blue());
    
    return circle;
  }



function Blue() {
    
    let redOutput = Math.floor(Math.random() * 175) + 1;
    let greenOutput = Math.floor(Math.random() * 221) + 1;
    let blueOutput = 255;
    
    return `rgb(${redOutput}, ${greenOutput}, ${blueOutput})`;
}

var backgroundColors = ["#ccccff", "#cdcdfe", "#d4d4f7", 
"#d9d9f2",
"#ddddee",
"#e0e0eb",
"#e2e2e9",
"#e4e4e7",
"antiquewhite",

]
var currentIndex = 0;

setInterval(function() {
	document.body.style.cssText = "background-color: " + backgroundColors[currentIndex];
	currentIndex++;
	if (currentIndex == undefined || currentIndex >= backgroundColors.length) {
		currentIndex = 0;
	}
}, 1000);