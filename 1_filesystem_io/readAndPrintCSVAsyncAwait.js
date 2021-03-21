const fs = require('fs').promises;
const path = require('path')

async function readAndParse() {
    const fileToRead = path.join(__dirname, 'ford_escort.csv');
    const file = await fs.readFile(fileToRead);

    let splittedUsedCars = file.toString().split('\n').slice(1, -1);

    return splittedUsedCars.map(car => {
        car = car.split(',');
        car = {
            year: car[0].trim(),
            mileage: parseInt(car[1].trim()),
            price: car[2].trim()
        }
        return car;
    });    
}

readAndParse().then(cars => {
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

