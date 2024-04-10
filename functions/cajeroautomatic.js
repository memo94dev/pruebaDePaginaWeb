function ejecutar() {
	let saldo = 1000; 

while (true) {
	let opcion = prompt("Posee un saldo inicial de 1000 $\n¿Qué desea hacer?\n1. Depositar\n2. Retirar\n3. Salir");
	
	if (opcion === "3") {
	alert("Hasta luego");
	break;
	}
	
	if (opcion === "1") {
	let valor = parseInt(prompt("Digite el valor a depositar:"));
	saldo += valor;
	alert("Acción realizada correctamente. Saldo: " + saldo);

	}else if (opcion === "2") {
		valor = parseInt(prompt("Digíte el valor a retirar:"));
		if (valor > saldo) {
		alert("No se realizó la acción. Saldo: " + saldo);
		}else{
		saldo -= valor;
		alert("Acción realizada exitosamente. Saldo: " + saldo);
		}
	}else{
	alert("Opción no válida!");
}
}
}