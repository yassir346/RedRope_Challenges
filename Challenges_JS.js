const produits = [
    {id: 1, nom: "Casque Bluetooth", prix: 120},
    {id: 2, nom: "Clavier Mécanique", prix: 85},
    {id: 3, nom: "Souris Gamer", prix: 45}
];

let keyWord;
function filtrerProduit(produits, keyWord){
    produits.forEach(produit => {
        if(keyWord === produit.nom){
            console.log(produit.nom);
        }
    });
}
