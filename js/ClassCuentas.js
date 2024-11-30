class Cuenta {
    constructor(numeroCuenta) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = 0; //given
    }
    getSaldo() {
        return this.saldo;
    }
    ingresarDinero(importe) {
        let message = "";
        if (importe <= 0) {
            alert('Inserta un amount correcta.');
        } else {
            this.saldo += importe;
            message = `Se ingresado ` + importe + `€. \n`;
            message += `El nuevo saldo en cuenta es: ` + this.saldo + importe;
            return message;
        }
    }
    retirarDinero(importe) {
        let message = "";
        if (importe <= 0) {
            alert('Inserta una importe valido.');
        } else {
            this.saldo -= importe;
            message = `El nuevo saldo disponible en cuenta es: €` + this.saldo.toFixed(2);
        }
        return message;
    }
}