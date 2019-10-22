const fig=document.querySelector(".mafig");
const img=fig.querySelector(".monImg");
var altTxt=img.getAttribute("alt");
var capElmt=document.createElement("figcaption");
var capTxt=document.createTextNode(altTxt);
capElmt.appendChild(capTxt);
fig.appendChild(capElmt);
console.log(fig);