// 1. On cible le bouton par son ID (assure-toi que ton bouton a id="btn-submit")
const boutonSignUp = document.getElementById('btn-submit');

// 2. La structure de l'écouteur
boutonSignUp.addEventListener('click', function(event) {//quant je click sur le button cette fct elle s'execute
    


// IMPORTANT : On définit la variable pour afficher l'erreur
    const messageErreurmdp = document.getElementById('erreur-mdp');

    const messageErreurtele = document.getElementById('erreur-tele');
    const messageErreurnben = document.getElementById('erreur-nben');











    
    // Récupération des valeurs des inputs
    const username = document.getElementById('username').value;
    const Motdepasse = document.getElementById('Motdepasse').value;
    const Email = document.getElementById('Email').value;
    const telephone = document.getElementById('teléphone').value;
    const Datedenaissance = document.getElementById('Date de naissance').value;
    const Wilaya = document.getElementById('Wilaya').value;
    const nbrenfants = document.getElementById('nbrenfants').value;
    const parcoursacademique = document.getElementById('parcours académique').value;

    // Gestion spéciale pour le SEXE (Radio buttons)
    let sexeValue = "";
    if (document.getElementById('homme').checked) {
        sexeValue = "Homme";
    } else if (document.getElementById('femme').checked) {
        sexeValue = "Femme";
    }

// gestion des contraintes des imput

if ((Motdepasse.length < 8) || (telephone.length !== 10) || (nbrenfants.length < 1) ){
        // Empêche le changement de page vers resultat.html
        event.preventDefault(); 

        if (telephone.length !== 10) {
    
        messageErreurtele.innerText = "le numero de telephone doit contenir 10 chiffre seulement";
        
}
if (Motdepasse.length < 8){  
        // Affiche le message et change le style
        messageErreurmdp.innerText = "Le mot de passe doit contenir au moins 8 caractères.";

}


if (nbrenfants.length < 1) {

        
        // Affiche le message et change le style
        messageErreurnben.innerText = "Le nbr d'enfant doit etre sup ou égale à 1";

    }

    return;

    }











    // ENREGISTREMENT des valeurs qui la renter le user dans le formulaire dans le navigateur dand des variables sauve_nom.....
    localStorage.setItem('sauve_nom', username);
    localStorage.setItem('sauve_mdp', Motdepasse);
    localStorage.setItem('sauve_email', Email);
    localStorage.setItem('sauve_tel', telephone);
    localStorage.setItem('sauve_date', Datedenaissance);
    localStorage.setItem('sauve_sexe', sexeValue);
    localStorage.setItem('sauve_wilaya', Wilaya);
    localStorage.setItem('sauve_enfants', nbrenfants);
    localStorage.setItem('sauve_parcours', parcoursacademique);

    // Redirection vers la page résultat
    window.location.href = "resultat.html";
});