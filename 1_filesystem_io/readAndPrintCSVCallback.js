const fs = require('fs');
const path = require('path')


/**
 * 1. Lecture du fichier
 */

// Créer le chemin du fichier que nous allons lire
const fileToRead = path.join(__dirname, 'ford_escort.csv');

// Lire le fichier et convertir son contenu en chaîne de caractères
fs.readFile(fileToRead, (e, file) => {

    // Supporter le fait qu'il puisse y avoir une erreur lors de la lecture du fichier
    if (e) {
        console.error('Erreur lors de la lecture du fichier', e);
        return;
    }


    /**
     * 2. Nettoyage du fichier et parsing
     */

    // Convertir le fichier en string, séparer les lignes du fichier csv en se basant sur le caractère spécial de nouvelle ligne
    let splittedUsedCars = file.toString().split('\n');

    // Supprimer le premier et le dernier element du tableau
    splittedUsedCars = splittedUsedCars.slice(1, splittedUsedCars.length - 1);

    // Séparer les colonnes du fichier csv en parcourant les différentes lignes
    for (let i = 0; i < splittedUsedCars.length; i++) {
        splittedUsedCars[i] = splittedUsedCars[i].split(',');

        // Pour chaque colonne de chaque ligne nettoyer les espaces blancs
        for (let j = 0; j < splittedUsedCars[i].length; j++) {
            splittedUsedCars[i][j] = splittedUsedCars[i][j].trim();
        }
    }


    /**
     * 3. Lecture et affichage
     */

    for (const car of splittedUsedCars) {
        console.log(`Voici une Ford Escort d'occasion :
        Année : ${car[0]}
        Kilométrage : ${parseInt(car[1]) * 1000} km.
        Prix : $${car[2]}
    ------------------------------------------------`)
    }

});

