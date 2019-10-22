const elmt=document.querySelector(".normal");
function eventclbk(e){
    console.log("clicked");
    elmt.classList.toggle("normal");
}
elmt.onclick=eventclbk;