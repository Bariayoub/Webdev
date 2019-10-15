function somme(){
    var a = prompt("donnez un nombre : ");
    var b = parseInt(a);
    c=true;

    while(c){
        a=prompt("donnez un nombre : ");
        b=b+parseInt(a);
        var x = prompt("voullez vous ajouter un autre nombre : y/n");
        if (x=="n" || x=='N'){
            c=false;
        }
    }
    alert("la somme est : "+b);
}

somme();