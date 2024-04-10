let saldo = 1000;

function depositar(valor){
    if (valor < 10){
        return false;
    }
    saldo += valor;
    return true;
}

function retirar(valor){
    if (valor > saldo){
        return false;
    }
    saldo -= valor;
    return true;
}

function action(accion){
    if (accion === "1"){
        let valor = parseInt(prompt("Digite el valor a Depositar: "));
        return depositar(valor);
    }

    if (accion === "2"){
        let valor = parseInt(prompt("Digite el valor a Retirar: "));
        return retirar(valor);
    }
    return false;
}

function main(accion){
    while (true){
        let accion = prompt("Que accion desea realizar:\n1. Depositar\n2. Retirar\n3. Salir")
        if (accion === "3"){
            alert("Hasta luego");
            break;
        }
        let resultado = action(accion);
        if (resultado === false){
            alert("Esta acción no se pudo realizar :( "+saldo);
        }else{
            alert("Acción realizada con éxito, su nuevo saldo es: "+saldo);
        }
    }
}