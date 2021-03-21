const fs = require('fs').promises;
const path = require('path')


/**
 * 1. Lecture du fichier
 */

// Créer le chemin du fichier que nous allons lire
const fileToRead = path.join(__dirname, 'ford_escort.csv');

// Lire le fichier et convertir son contenu en chaîne de caractères
fs.readFile(fileToRead).then(file => {

    /**
     * 2. Nettoyage du fichier et parsing
     */

    // Convertir le fichier en string, séparer les lignes du fichier csv en se basant sur le caractère spécial de nouvelle ligne
    let splittedUsedCars = file.toString().split('\n');

    // Supprimer le premier et le dernier element du tableau
    splittedUsedCars = splittedUsedCars.slice(1, splittedUsedCars.length - 1);

    // Séparer les colonnes du fichier csv en parcourant les différentes lignes et preparer un tableau propre
    const cars = [];

    for (let car of splittedUsedCars) {
        car = car.split(',');

        // Créer un objet pratique
        car = {
            year: car[0].trim(),
            mileage: parseInt(car[1].trim()),
            price: car[2].trim()
        }

        // Ajouter la voiture au tableau "propre"
        cars.push(car);
    }


    /**
     * 3. Lecture et affichage
     */

    for (const car of cars) {

        console.log(`Voici une Ford Escort d'occasion :
        Année : ${car.year}
        Kilométrage : ${car.mileage * 1000} km.
        Prix : $${car.price}
    ------------------------------------------------`)
    }

})
.catch(e => {
    console.error('Erreur lors de la lecture du fichier', e);
});

