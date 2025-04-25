let ToDoList = [
    {tache: 1, titre: "Apprendre JS", statut: "todo"},
    {tache: 2, titre: "Apprendre php", statut: "inprogress"},
    {tache: 3, titre: "Apprendre sql", statut: "done"},
    {tache: 4, titre: "Apprendre laravel", statut: "done"},
    {tache: 5, titre: "Apprendre english", statut: "inprogress"}
];


ToDoList.length


function ajouterTache(tache, titre, statut){
    ToDoList.push({"tache": tache, "titre": titre, "statut": statut});

}

ajouterTache(6, "newtask", "done");
ajouterTache(7, "newtask", "done");

console.log(ToDoList);







