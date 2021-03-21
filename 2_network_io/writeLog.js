const fs = require('fs');
const path = require('path');
const http = require('http');
const { URL } = require('url');
const { parse: parseQuery } = require('querystring');

const serverOrigin = 'http://localhost:8080';

// Créer le serveur http
const server = http.createServer((request, response) => {
  const url = new URL(request.url, serverOrigin);
  const query = parseQuery(url.search.substr(1));
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end(`Salut, ${query.name} !\n`);

  // On ajoute au fichier de log des informations sur la derniere requete
  fs.appendFileSync(
    path.join(__dirname, 'log.txt'),
    `${Date()} - Server called with following query params: ${JSON.stringify(query)} \n`
  );
});

server.listen(8080);
console.log(`Server running at ${serverOrigin}`);