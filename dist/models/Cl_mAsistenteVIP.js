import Cl_mAsistente from "./Cl_mAsistente.js";
export default class Cl_mAsistenteVIP extends Cl_mAsistente {
    constructor(nombre, apellido, cedula, edad, sexo, fechaNac) {
        // Pasamos los 6 parámetros base a la clase padre (Cl_mAsistente)
        super(nombre, apellido, cedula, edad, sexo, fechaNac);
    }
    precioPagar() {
        // La entrada VIP cuesta $30.
        // Si el asistente es dama (F), cuesta $25.
        if (this.sexo === 'F') {
            return 25;
        }
        return 30;
    }
}
//# sourceMappingURL=Cl_mAsistenteVIP.js.map