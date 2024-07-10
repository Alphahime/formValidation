document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validationFormulaire');
    const prenomInput = document.getElementById('prenom');
    const nomContainer = document.getElementById('nomContainer');
    const emailContainer = document.getElementById('emailContainer');
    const passwordContainer = document.getElementById('passwordContainer');
    const messageSucces = document.getElementById('MessageSucces');
    const prenomErreur = document.getElementById('prenomErreur');
    const nomErreur = document.getElementById('nomErreur');
    const emailErreur = document.getElementById('emailErreur');
    const passwordErreur = document.getElementById('passwordErreur');

    // Masquer tous les champs sauf le premier au chargement initial
    nomContainer.style.display = 'none';
    emailContainer.style.display = 'none';
    passwordContainer.style.display = 'none';

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire

        let isValid = true;

        // Validation du prénom
        const prenom = prenomInput.value.trim();
        if (prenom.length < 3 || prenom.length > 15) {
            isValid = false;
            prenomErreur.textContent = 'Le prénom doit comporter entre 3 et 15 caractères.';
        } else {
            prenomErreur.textContent = '';
            // Afficher le champ suivant (Nom)
            nomContainer.style.display = 'block';
        }

        // Validation du nom
        const nom = document.getElementById('nom').value.trim();
        if (isValid && (nom.length < 3 || nom.length > 15)) {
            isValid = false;
            nomErreur.textContent = 'Le nom doit comporter entre 3 et 15 caractères.';
        } else {
            nomErreur.textContent = '';
            // Afficher le champ suivant (Adresse email)
            emailContainer.style.display = 'block';
        }

        // Validation de l'adresse email
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (isValid && !emailPattern.test(email)) {
            isValid = false;
            emailErreur.textContent = 'Veuillez entrer une adresse email valide.';
        } else {
            emailErreur.textContent = '';
            // Afficher le champ suivant (Mot de passe)
            passwordContainer.style.display = 'block';
        }

        // Validation du mot de passe
        const password = document.getElementById('password').value.trim();
        if (isValid && password.length < 8) {
            isValid = false;
            passwordErreur.textContent = 'Le mot de passe doit comporter au moins 8 caractères.';
        } else {
            passwordErreur.textContent = '';
        }

        // Si tous les champs sont valides, afficher le message de succès
        if (isValid) {
            messageSucces.textContent = 'Le formulaire a été bien soumis.';
            messageSucces.style.display = 'block';
            form.reset(); // Réinitialisation du formulaire
        }
    });
});
