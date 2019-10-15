function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    if (x==""){
        alert("remplissez les champs vides");
    }else alert('Vous avez réussi votre exercice');   
}

document.write('<form name="myForm" onsubmit="return validateForm()" method="post">Name: <input type="text" name="fname"><input type="submit" value="Submit"></form>')