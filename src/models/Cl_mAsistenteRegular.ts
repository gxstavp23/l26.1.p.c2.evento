import Cl_mAsistente from "./Cl_mAsistente.js";

export default class Cl_mAsistenteRegular extends Cl_mAsistente {
    public esEstudiante: boolean;

    constructor(
        nombre: string, 
        apellido: string, 
        cedula: number, 
        edad: number, 
        sexo: string, 
        fechaNac: string, 
        esEstudiante: boolean
    ) {
        // Pasamos los 6 parámetros base a la clase padre (Cl_mAsistente)
        super(nombre, apellido, cedula, edad, sexo, fechaNac);
        this.esEstudiante = esEstudiante;
    }

    precioPagar(): number {
        // La entrada regular cuesta $10. 
        // Tiene 50% de descuento ($5) para estudiantes menores de edad.
        if (this.esEstudiante && this.edad < 18) {
            return 5;
        }
        return 10;
    }
}