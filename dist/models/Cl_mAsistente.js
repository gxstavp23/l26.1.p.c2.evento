import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mAsistente extends Cl_mPersona {
    constructor(nombre, apellido, cedula, edad, sexo, fechaNac) {
        super(nombre, apellido, cedula, edad, sexo, fechaNac);
    }
    precioPagar() { return 0; }
}
//# sourceMappingURL=Cl_mAsistente.js.map