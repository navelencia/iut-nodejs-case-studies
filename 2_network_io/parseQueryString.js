const http = require('http');
const { URL } = require('url');
const { parse: parseQuery } = require('querystring');

// L'origine du serveur pour pouvoir trouver l'url relative et décoder les paramètres
const serverOrigin = 'http://localhost:8080';

// Créer le serveur http
const server = http.createServer((request, response) => {

  // Parser l'url
  const url = new URL(request.url, serverOrigin);

  // Parser la requete de l'URL, on doit enlever le ? de debut explicitement
  const query = parseQuery(url.search.substr(1));

  // On ecrit la reponse a l'utilisateur avec un code 200
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end(`Salut, ${query.name} !\n`);

});

// Ecouter sur le port 8080, sur l'hôte 127.0.0.1
server.listen(8080);

// Ecrire dans la console un message pour donner l'url
console.log(`Server running at ${serverOrigin}`);