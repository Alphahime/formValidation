document.getElementById('validationFormulaire').addEventListener('submit', function(event){
    event.preventDefault(); // ce qui empêche la soumission par défaut du formaulaire

// Recupère les valeurs des champs du formulaire
const prenom =document.getElementById('prenom').value;
const nom = document.getElementById('nom').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

// variable de validation
let Validation = true;
 // Réinitialisation des messages d'erreur

document.getElementById('prenomErreur').textContent ='';
document.getElementById('nomErreur').textContent ='';
document.getElementById('emailErreur').textContent = '';
document.getElementById('passwordErreur').textContent ='';


// validation du nom
if (nom.length < 3 || nom.length > 15 ) {
     Validation = false;
     document.getElementById('nomErreur').textContent = 'Le nom doit comporter entre 3 et 15 caractères .';

}

// validation du mot de passe
 const emailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailPatern.test(email)) {
   Validation = false;
   document.getElementById('emailErreur').textContent = 'veuillez entrer une adresse email valide';
 }

 // validation du mot de passe
 if(password.length < 8){
    Validation = false;
    document.getElementById('passwordErreur').textContent = 'Le mot de passe doit comporter au moins 8 caractères .';

 }

 // affichage de message de succés ou des erreurs 

 if (Validation) {
   document.getElementById('MessageSucces').textContent = 'Le formulaire a été bien soumis ';
   document.getElementById('validationFormulaire').style.display = 'none';
 }

});