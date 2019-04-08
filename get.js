// Code from https://www.tomas-dvorak.cz/posts/nodejs-request-without-dependencies/

const http = require("http");
const https = require("https");

const get = url =>
    new Promise((resolve, reject) => {
        const handler = url.startsWith("https") ? https : http;
        const request = handler.get(url, response => {
            let body = "";
            response.on("data", chunk => (body += chunk));
            response.on("end", () => resolve(JSON.parse(body)));
        });
        request.on("error", error => reject(`Error: ${error}`));
    });

module.exports = get;
