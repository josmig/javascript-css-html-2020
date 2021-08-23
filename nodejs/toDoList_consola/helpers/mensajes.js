require('colors');

const mostrarMenu = ()=>{
    return new Promise (resolve => {
        console.clear();
        console.log('========================='.green);
        console.log('  Seleccione una opción  '.green);
        console.log('=========================\n'.green);

        console.log(`${'1.'.green} Crear una tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas Completadas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tareas`);
        console.log(`${'6.'.green} Borrar Tarea`);
        console.log(`${'0.'.green} Salir`);
        
        //con esto se recibe información del usuario por consola (readline viene proprio en node)
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', (resp) => {
    /*        console.log({resp}); */
            readline.close();
            resolve(resp);
        });
    });
}

const pausa = ()=> {
    return new Promise ( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.red} para continuar\n`, (resp) => {        
            readline.close();
            resolve();
        })
    })
    
}




module.exports= {
    mostrarMenu,
    pausa
}