const express = require('express');
const morgan = require('morgan');

const app = express();

const postBank = require('./postBank.js');

app.get("/", (req, res)=> {
    const posts = postBank.list();

    const html = `<!DOCTYPE html>
    <html>
        <head>
            <title>Wizzard News</title>
        </head>
        <body>
            <ul>
                ${posts.map(post => `<li>
                <ul>
                    <li>${post.title}</li>
                    <li>${post.name}</li>
                </ul>
                </li>`).join('')}
            </ul>
        </body>
    </html>`;


    res.send(html);
});

app.use(morgan('dev'));

const PORT = 1337;

app.listen(PORT, ()=> {
    console.log(`App listening in port ${PORT}`);
});
