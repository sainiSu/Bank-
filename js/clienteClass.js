class Cliente {
    constructor(dni, nombre, apellido) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cuentas = [];
        console.log(Cliente);
    }
    getDni() {
        return this.dni;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    setDni(newdni) {
        this.dni = newdni;
    }
    setNomnbre(newNombre) {
        this.nombre = newNombre;
    }
    setApellido(newApellido) {
        this.apellido = newApellido;
    }
    toString() {
        let mostrar = `
            Datos del clinete:
            Nombre:  ${this.nombre}  
            apellido:  ${this.apellido} 
            DNI: ${this.dni}.`;
        return mostrar;
    }
    aregrarCuentas(cuenta) {
        this.cuentas.push(cuenta);
    }
    buscarCuenta(cuenta) {
        let encontardo = false;
        let indiceCuenta = -1;
        let i = 0;
        let vuelats = this.cuentas.length;
        while (i < vuelats && !encontardo) {
            if (cuenta == this.cuentas[i].numeroCuenta) {
                indiceCuenta = i;
                encontardo = true;
            }
            i++;
        }
        console.log(indiceCuenta);
        return indiceCuenta;
    }
}


