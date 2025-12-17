require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./helpers/models/tarea');
const Tareas = require('./helpers/models/tareas');

console.clear();

const main = async() => {

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({ opt });
        
        if ( opt !== '0' ) await pausa();

    } while(opt !== '0');


}

main();