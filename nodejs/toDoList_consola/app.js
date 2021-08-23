require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');


console.clear();

const main = async()=>{    

    let op = '';
    do{
        op = await mostrarMenu();
        console.log({op});
        (op !== '0') ? await pausa() : console.log();
        
    }while( op !== '0');
    
    /* pausa(); */
}
main();