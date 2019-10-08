let s;
let re3 = prompt("donnez a: ");
let rep = prompt("donnez b : ");
let rep1 = prompt("givev op");

switch(rep1){
	case '+' : 	s = parseInt(rep)+parseInt(re3);alert(s);;break;
	case '*' : 	s = parseInt(rep)*parseInt(re3);alert(s);break;
	case '-': 	s = parseInt(rep)-parseInt(re3);alert(s);break;
	case '/':   s = parseInt(rep)/parseInt(re3);alert(s);break;
	default: alert("cant");break;
}
