const nomClient = "Awa";
const nomProduit = "Ordinateur";
const prixUnitaire = 250000;
const quantite = 2;
const fraisLivraison = 5000;
const tauxTVA = 0.18;

console.log("===== REÇU DE COMMANDE =====");
console.log("Client : " + nomClient);
console.log("Produit : " + nomProduit);
console.log("Prix unitaire : " + prixUnitaire + " FCFA");
console.log("Quantité : " + quantite);
console.log("");

const montantProduits = prixUnitaire * quantite;
console.log("Montant des produits : " + montantProduits + " FCFA");
const montantTVA = montantProduits * tauxTVA;
console.log("TVA (18%) : " + montantTVA + " FCFA");
const montantTTC = montantProduits + montantTVA;
console.log("Montant TTC : " + montantTTC + " FCFA");
const montantFinal = montantTTC + fraisLivraison;
console.log("Livraison : " + fraisLivraison + " FCFA");
console.log("TOTAL A PAYER : " + montantFinal + " FCFA");
console.log("");
const prixMoyenTTC = montantTTC / quantite;
console.log("Prix moyen TTC par produit : " + prixMoyenTTC + " FCFA");
console.log("");

console.log("Type du nom : " + typeof nomClient);
console.log("Type du prix : " + typeof prixUnitaire);
console.log("Type de la quantité : " + typeof quantite);