let chalk = require('chalk');
const app = require('./src/app');

// port
const port = 4400;
app.listen(port)

// start server here
console.log(chalk.green('Hello web server on ' + port));
module.exports = app;