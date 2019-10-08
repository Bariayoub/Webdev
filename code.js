function user(nom,prenom) {
	this.nom = nom;
	this.prenom = prenom;
	this.direHi = function(){
		console.log("HI");
	};
};

let u1 = new user("ghoudan","ayoub");
let u2 = new user("bari","ayoub");