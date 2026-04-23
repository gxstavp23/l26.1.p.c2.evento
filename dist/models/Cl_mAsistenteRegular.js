import Cl_mAsistente from "./Cl_mAsistente.js";
export default class Cl_mAsistenteRegular extends Cl_mAsistente {
    esEstudiante;
    constructor(nombre, apellido, cedula, edad, sexo, fechaNac, esEstudiante) {
        // Pasamos los 6 parámetros base a la clase padre (Cl_mAsistente)
        super(nombre, apellido, cedula, edad, sexo, fechaNac);
        this.esEstudiante = esEstudiante;
    }
    precioPagar() {
        // La entrada regular cuesta $10. 
        // Tiene 50% de descuento ($5) para estudiantes menores de edad.
        if (this.esEstudiante && this.edad < 18) {
            return 5;
        }
        return 10;
    }
}
//# sourceMappingURL=Cl_mAsistenteRegular.js.map