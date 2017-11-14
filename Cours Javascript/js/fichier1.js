function Validation() {

var sexe = document.getElementById('mr').checked;
var sexe2 = document.getElementById('miss').checked;
var prenom = document.getElementById('prenom');
var erreur = document.getElementById('erreur');

	if(sexe === false  sexe2 === false ) {
		erreur.innerHTML = '<p style="color:red">Veuillez choisir votre sexe</p>';
		document.formul.mr.focus();
		return false;
	}
	if(prenom === '') {
		alert('ok');
	}

}
