function buscar(dniCliente) {
    let encontardo = false;
    let indice = -1;
    let i = 0;
    let vuelats = clientes.length;
    while (i < vuelats && !encontardo) {
        if (dniCliente == clientes[i].dni) {
            indice = i
            encontardo = true;
        }
        i++;
    }
    return indice;
}
function encontrar() {
    let dniClient = prompt("Introduce el numero de DNI del cliente", "");
    let indiceEncontra = buscar(dniClient);
    if (indiceEncontra == -1) {
        alert("Este cliente no existe");
    }
    return indiceEncontra;
}
function mostrarCliente() {
    let indexMostrar = encontrar();
    if (indexMostrar == -1) {
        alert("Este cliente no existe");
        posicion == clientes.length - 1;
    } else {
        alert(clientes[indexMostrar].toString());
        posicion = indexMostrar;
    }
}
function eliminar() {
    let indexEliminar = encontrar();
    if (indexEliminar == -1) {
        console.log(indexEliminar)
        alert("Este cliente no existe");
        posicion == clientes.length - 1;
    } else {
        confirm("Seguro que quieres eliminar: " + clientes[indexEliminar].toString()
        );
        clientes.splice(indexEliminar, 1);
        alert("Cliente borrado");
        posicion = indexEliminar - 1;

    }
}
function verClientes() {
    let indexMostrar = encontrar();
    if (indexMostrar == -1) {
      alert("Este cliente no existe");
      posicion == clientes.length - 1;
    } else {
      alert(clientes[indexMostrar].toString());
      posicion = indexMostrar;
    }
  }