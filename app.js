// Starter code pour l'atelier Panier d'Achat OOP
// Classe Produit
class Product {
    constructor(id, name, price) {
        // TODO: Initialiser les propriétés id, name, et price du produit
    }
}

// Classe Item de Panier
class ShoppingCartItem {
    constructor(product, quantity = 1) {
        // TODO: Initialiser les propriétés product et quantity (quantité de produit)
    }

    // Méthode pour calculer le prix total de cet item dans le panier
    getTotalPrice() {
        // TODO: Retourner le prix total en multipliant le prix du produit par la quantité
    }
}

// Classe Panier
class ShoppingCart {
    constructor() {
        // TODO: Initialiser un tableau vide pour stocker les items du panier
    }

    // Méthode pour ajouter un produit au panier
    addItem(product) {
        // TODO: Vérifier si le produit existe déjà dans le panier
        // Si oui, augmenter la quantité, sinon, ajouter un nouvel item au panier
    }

    // Méthode pour supprimer un produit du panier
    removeItem(productId) {
        // TODO: Supprimer un produit du panier en utilisant son id
    }

    // Méthode pour mettre à jour la quantité d'un produit dans le panier
    updateQuantity(productId, newQuantity) {
        // TODO: Trouver le produit dans le panier et mettre à jour sa quantité
        // Si la nouvelle quantité est 0 ou moins, supprimer l'item du panier
    }

    // Méthode pour afficher les items du panier
    displayCart() {
        // TODO: Boucler à travers les items du panier et les afficher
        // Vous pouvez utiliser des fonctions DOM pour mettre à jour l'interface
    }

    // Méthode pour calculer le nombre total d'articles dans le panier
    getTotalItems() {
        // TODO: Retourner le nombre total d'items dans le panier
    }

    // Méthode pour calculer le prix total de tous les items dans le panier
    getTotalPrice() {
        // TODO: Retourner le prix total de tous les items en additionnant leur prix total
    }

    // Méthode pour mettre à jour l'affichage du panier
    updateCartDisplay() {
        // TODO: Mettre à jour l'affichage du panier en appelant displayCart()
        // et mettre à jour le nombre total d'articles et le prix total
    }
}

// Liste des produits (à remplir)
const products = [
    // TODO: Créer quelques instances de Product avec des id, noms et prix
];

// Instance du panier (ShoppingCart)
const cart = new ShoppingCart();

// Fonction pour afficher la liste des produits
function displayProductList() {
    // TODO: Afficher dynamiquement les produits sur la page en utilisant les méthodes DOM
    // Ajouter un bouton "Ajouter au panier" pour chaque produit
}

// TODO: Appeler displayProductList() pour afficher les produits lorsque la page est chargée
