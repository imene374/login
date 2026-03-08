// Ce code s'exécute tout seul dès que la page résultat s'ouvre
//elle prend l'element depuis sont id et ecrire la valeur de lacalstorage assosier a se id dans ce element
document.getElementById('username').innerText = localStorage.getItem('sauve_nom');
document.getElementById('Motdepasse').innerText = localStorage.getItem('sauve_mdp');
document.getElementById('Email').innerText = localStorage.getItem('sauve_email');
document.getElementById('teléphone').innerText = localStorage.getItem('sauve_tel');
document.getElementById('sexe').innerText = localStorage.getItem('sauve_sexe');
document.getElementById('Date de naissance').innerText = localStorage.getItem('sauve_date');
document.getElementById('Wilaya').innerText = localStorage.getItem('sauve_wilaya');
document.getElementById('nbrenfants').innerText = localStorage.getItem('sauve_enfants');
document.getElementById('parcours académique').innerText = localStorage.getItem('sauve_parcours');