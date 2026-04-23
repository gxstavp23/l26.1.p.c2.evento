import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mAsistente extends Cl_mPersona {
    constructor(nombre: string, apellido: string, cedula: number, edad: number, sexo: string, fechaNac: string) {
        super(nombre, apellido, cedula, edad, sexo, fechaNac);
    }
    precioPagar(): number { return 0; }
}