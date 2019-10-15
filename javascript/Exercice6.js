var x= Math.random()*Math.floor(20);

function test(){


var c=true;
var a =document.getElementsByName("nombre").value;
x=parseInt(x);

 if (x>parseInt(a)){
    document.getElementById("1").innerHTML="plus grand";
 }else if (x<parseInt(a)) {
    document.getElementById("1").innerHTML="plus petit";
 }else if (x==parseInt(a)) {
    
    document.getElementById("1").innerHTML="bingoo";
     c=false;
 }

}




function affiche(){
    document.write(x);
}