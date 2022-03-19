const express = require('express');
const router = require('./router');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended : false}));
app.use(express.json());

app.use(router);

(async () => {
    const database = require('./database');
 
    try {
        const resultado = await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

app.listen(port, () => {
  console.log(`Áurea Connection app listening on port ${port}`);
});