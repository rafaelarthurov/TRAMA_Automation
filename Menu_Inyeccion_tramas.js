const readlineSync = require('readline-sync');

//Importando los objetos desde cuerpo_tramas.js
const {
    Deposito_ATM,
    Retiro_ATM,
    Compra_ATH,
    Compra_TC_Visa,
    Transferencia_LBTR
} = require('./cuerpo_tramas.js');

//Labels de las tramas existentes en cuerpo_tramas.js
//Hardcode meanwhile, la idea es construir este string de manera de dinamica
const tramas = [
    'Deposito_ATM',
    'Retiro_ATM',
    'Compra_ATH',
    'Compra_TC_Visa',
    'Transferencia_LBTR',
    'prueba'
]

//Main menu: seleccion de la trama a modificar
function mostrarMenuPrincipal() {
    console.log("Sistema automatico de generacion de TRAMAS")
    console.log("Seleccione que tipo de TRAMA desea armar: ")

    var Obj_length = Object.values(Deposito_ATM).length

    /*tramas.forEach(tramas, index => {
        console.log(`${index}. ${tramas}`);
    });*/

    for (let index = 0; index < tramas.length; index++) {
        console.log(index + 1, ". ", tramas[index]);
    }
    console.log("0 .  Salir");
}

//
function getOpcionUsuario() {
    const seleccion = readlineSync.
        question("Coloca el numero de tu seleccion (0-" + tramas.length + "): ");
    return parseInt(seleccion);
}

function manejoOpcionUsuario(seleccion) {

    console.log("")
    console.log("Ha seleccionado la trama " + tramas[seleccion - 1] + " para editar, estos son los parametros: ")
    console.log(Deposito_ATM)

    switch (seleccion) {
        case 0:
            console.log("Saliendo del programa, hasta luego!");
            break;
        case Deposito_ATM.cuerpo_Init:
            console.log("Opcion 1: ", Deposito_ATM.cuerpo_Init);
            break;
        case Retiro_ATM.monto:
            console.log("Opcion 2: ", Retiro_ATM.monto);
            break;
        case Compra_ATH.moneda:
            console.log("Opcion 1: ", Compra_ATH.moneda);
            break;
        case Compra_TC_Visa.cuerpo_End:
            console.log("Opcion 1: ", Compra_TC_Visa.cuerpo_End);
            break;
        case Transferencia_LBTR.banco:
            console.log("Opcion 1: ", Transferencia_LBTR.banco);
            break;
        /*default:
            console.log("Opcion de parametro no existe");*/
    }
}

function getParametro() {
    const seleccion = readlineSync.
        question("Escribe el parametro a actualizar: ");
    return (seleccion);
}

function ejecutarMenu() {

    let seleccionUsuario;
    let seleccionParametro;

    //let Menu_size = tramas.length+1;
    do {
        mostrarMenuPrincipal();
        seleccionUsuario = getOpcionUsuario();
        if (seleccionUsuario != 0) {
            manejoOpcionUsuario(seleccionUsuario);
            seleccionParametro = getParametro();
        }
        construirTrama(seleccionParametro);
    } while (seleccionUsuario !== 0);
}

function construirTrama(params) {
    if (params == 1) {
        Deposito_ATM.moneda
        switch (params) {
            case 0:
                console.log("Saliendo a menu principal!!");
                break;
            case 1:
                console.log("cuerpo_Init");
                break;
            case 2:
                console.log("moneda");
                break;
            case 3:
                console.log("monto");
                break;
            case 4:
                console.log("cuenta");
                break;
            case 5:
                console.log("banco");
                break;
            case 6:
                console.log("cuerpo_End");
                break;
            default:
                console.log("Opcion de parametro invalida. Entre 1 y 6");
        }
    }
    if (params == 2) {
        Deposito_ATM.monto
    }
    if (params == 3) {
        Deposito_ATM.cuenta
    }
    if (params == 4) {
        Deposito_ATM.banco
    }
}

/*function getTrama(){
    let gotTrama = Object.keys(TramasPackages)
    return gotTrama
}*/

// Run the menu

ejecutarMenu();