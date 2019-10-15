function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["faname"].value;
    var z = document.forms["myForm"]["email"].value;
    if (x=="" || y=="" || z==""){
        alert("remplissez les champs vides");
    }else alert('Vous avez réussi votre exercice');   
}

document.write('<form name="myForm" onsubmit="return validateForm()" method="post">Name: <input type="text" name="fname"><br><br>Family name: <input type="text" name="faname"><br><br>Email: <input type="text" name="email"><br><br><input type="submit" value="Submit"></form>');