function vecteur(a,b) {
	this.a = a;
	this.b = b;
}
vecteur.prototype.mod = function() {
	return Math.sqrt(this.a*this.a + this.b*this.b);
};

vecteur.prototype.egale = function(v) {
	return (this.a == v.a && this.b==v.b);
};

let x = new vecteur(2,2);
let y = new vecteur(2,4);

console.log(x.mod());
console.log(y.mod());
console.log(x.egale(y));

