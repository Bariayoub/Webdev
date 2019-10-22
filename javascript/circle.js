const c = document.querySelector(".circle");
console.log(c);
console.log(c.style.top);
console.log(c.style.left);
function getCord(e){
    var x=(e.clientX+25)+"px";
    var y=(e.clientY+25)+"px";
    c.style.top=y;
    c.style.left=x;
    console.log(x,y);
    return [x,y];
}

var b= document.querySelector("body");
b.addEventListener("mousemove",getCord);
