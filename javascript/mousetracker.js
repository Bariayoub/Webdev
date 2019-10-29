const doc = document.body;
const circle = document.querySelector('.circle');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    var horizontalPosition = windowWidth - e.clientX - 25;
    var verticalPosition= windowHeight - e.clientY - 25;
    console.log(horizontalPosition);
    console.log(verticalPosition);
    
    circle.style.left = horizontalPosition + 'px';
    circle.style.top = verticalPosition + 'px';
}

function changeColorOnTouch() {
    circle.style.backgroundColor = "orange";
    circle.style.borderColor = "orange";
}

doc.addEventListener('mousemove', mouseCoordinates);
circle.addEventListener('mouseenter', changeColorOnTouch);
circle.addEventListener('mouseleave', function(){circle.removeAttribute("style");});
