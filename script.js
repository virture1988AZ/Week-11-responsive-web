"use strict";
const svg = document.getElementById("svg-canvas");
const colorRect = document.getElementById('colorRect');
const colorPalette = document.getElementById('colorPalette');
const colorText = document.getElementById('colorText');
window.addEventListener("resize", resizeSvg);

function resizeSvg(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);

    for(let circle of svg.children){
        circle.setAttribute('r', Math.min(bbox.width, bbox.height)*0.1);
    }
}
var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];

colorText.setAttribute('fill', 'white');
colorText.setAttribute('font-size', '45');
colorText.setAttribute('x', '250');
colorText.setAttribute('y', '150');

colorPalette.addEventListener('input', function() {
    var selectedColor = colorPalette.value;
    colorRect.setAttribute('fill', selectedColor);
  });


colors.forEach(function(color) {
    var colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;
  
    colorBox.addEventListener('click', function() {
      colorRect.setAttribute('fill', color);
    });
  
    colorPalette.appendChild(colorBox);
  });

colorPalette.addEventListener('input', function() {
  var selectedColor = colorPalette.value;
  colorRect.setAttribute('fill', selectedColor);
  
  // Update the text content with the hex value of the selected color
  colorText.textContent = selectedColor;
});

let loops = [];

var colorPattern = [
    "#002db3",
    "#4d79ff",
    "#00076f",
    "#44008b",
    "#9f45b0",
    "#e54ed0",
    "#ffe4f2"

]

const width = window.innerWidth;
const height = window.innerHeight;
svg.setAttribute('width', width);
svg.setAttribute('height', height);

const circleRadius = 50;
let x = width / 2;
let y = height / 2;
let dx = 2;
let dy = -2;

const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('cx', x);
circle.setAttribute('cy', y);
circle.setAttribute('r', circleRadius);
circle.setAttribute('fill', makeRGB());

svg.appendChild(circle);

function animate() {
  x += dx;
  y += dy;

  
  if (x + circleRadius > width || x - circleRadius < 0) {
    dx = -dx; 
    circle.setAttribute('fill', makeRGB()); 
  }
  if (y + circleRadius > height || y - circleRadius < 0) {
    dy = -dy; 
    circle.setAttribute('fill', makeRGB()); 
  }

  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);

  requestAnimationFrame(animate);
}

animate();


