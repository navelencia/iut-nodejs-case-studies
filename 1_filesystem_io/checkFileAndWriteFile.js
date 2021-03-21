const fs = require('fs').promises;
const path = require('path');

async function checkAndWrite(path) {
    try {
        await fs.access(path);
        await fs.rm(path);
    } catch (e) {
        console.error(`Le fichier n'existe pas, pas besoin de le supprimer.`)
    }

    const fileContent = `Bonjour, il est ${Date()}`;
    
    await fs.writeFile(path, fileContent);
}

checkAndWrite(path.join(__dirname, './nouveauFichier.txt')).catch(e => {
    console.error('Erreur', e);
});