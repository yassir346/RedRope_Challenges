const etudiants = [
    { nom: "Amina", moyenne: 15 },
    { nom: "Hassan", moyenne: 8 },
    { nom: "Samira", moyenne: 12 }
  ];

  
function statistiquesEtudiants(etudiants){
    let count = 0;
    let sum = 0;
    let moyenneGenerale;
    let etudiantAdmis = 0;
    etudiants.forEach(etudiant => {
        count++;
        sum += etudiant.moyenne;
        if(etudiant.moyenne >= 10){
            console.log("Admis: " + etudiant);
            etudiantAdmis++;
        }
    });
    moyenneGenerale = sum / count;
    console.log("nombre d'etudiants est :" + count);
    console.log("Moyenne :" + moyenneGenerale);
    console.log("Nombre Etudiants Admis :" + etudiantAdmis);
}

statistiquesEtudiants(etudiants);