const clientes = [];
const cuentas = [];
let posicion = 0;

function crearCliente() {
    let indexAgregar = encontrar();
    if (indexAgregar == -1) {
        let clienteNombre = prompt("Escribe el nombre del cliente:");
        let clienteApellido = prompt("Escribe el apellido del cliente:");
        let clienteDni = prompt("Introduce el numero de DNI del cliente:");
        let cliente = new Cliente(clienteDni, clienteNombre, clienteApellido);
        clientes.push(cliente);
        console.log(cliente);
        posicion = clientes.length - 1;
        clienteDni = clientes[posicion].dni;
        clienteNombre = clientes[posicion].nombre;
        clienteApellido = clientes[posicion].apellido;
        alert(cliente);
    }
}
function aregrarCuenta() {
    let dniCliente = prompt("Indica el DNI del cliente a quien quieres crearle una cuenta:", "123456");
    let indexAgregarCuenta = buscar(dniCliente);
    if (indexAgregarCuenta == -1) {
        alert("Este cliente no existe.");
    } else {
        let cuentaNueva = prompt("Introduce el numero de cuenta asociar:", "123456");
        clientes[indexAgregarCuenta].aregrarCuentas(new Cuenta(cuentaNueva));
        console.log(cuentaNueva);
        posicion = cuentas.length - 1;
        console.log(clientes);
        console.log(cuentas);
        console.log(posicion);
        alert(`La cuenta ${cuentaNueva} del cliente ${dniCliente}`);
    }
}
function ingresarEuro() {
    let importe;
    let indexClienteIngresar = encontrar();
    console.log(indexClienteIngresar);
    if (indexClienteIngresar == -1) {
        console.log(indexClienteIngresar);
        alert("Este cliente no existe, Create it");
    } else {
        let cuenta = prompt("Introduce el número de cuenta donde quieres ingresar: ", "123456");
        let indexCuentaIngresar = clientes[indexClienteIngresar].buscarCuenta(cuenta);
        if (indexCuentaIngresar < 0) {
            alert("Esta cuenta no esta existe.");
            //we have to cretae first thn ingresar dinero
        } else {
            importe = parseFloat(prompt("Indique el importe a ingrear:", "250€"));
            clientes[indexClienteIngresar].cuentas[indexCuentaIngresar].ingresarDinero(importe) ;
        }
        posicion = cuentas.length - 1;
        console.log(posicion);
    }
}
function retirarEuro() {
    let importe;
    let indexClienteRetirar = encontrar();
    console.log(indexClienteRetirar);
    if (indexClienteRetirar == -1) {
      console.log(indexClienteRetirar);
      alert("Este cliente no existe.");
    } else {
      let cuenta = prompt("Introduce el número de cuenta donde quieres retirar: ","123456");
      let indexCuentaRetirar =
       clientes[indexClienteRetirar].buscarCuenta(cuenta);
      if (indexCuentaRetirar < 0) {
        alert("Esta cuenta no le pertece al cliente indicado, verifica la cuenta o créela primero.");
      } else {
        importe = parseFloat(prompt("Indique el importe a retirar:", "150€"));
       clientes[indexClienteRetirar].cuentas[indexCuentaRetirar].retirarDinero(importe);
      }
     posicion = cuentas.length - 1;
      console.log(posicion);
    }
}
