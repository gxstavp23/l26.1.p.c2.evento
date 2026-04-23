import { I_vAsistente } from "../interfaces/I_vAsistente.js";

declare var bootstrap: any;

export default class Cl_vAsistenteBootstrap implements I_vAsistente {
    private modalInstance: any;

    constructor() {
        this.modalInstance = new bootstrap.Modal(document.getElementById("modal-asistente")!);
    }

    get nombre() { return (document.getElementById("inNombre") as HTMLInputElement).value; }
    get apellido() { return (document.getElementById("inApellido") as HTMLInputElement).value; }
    get cedula() { return +(document.getElementById("inCedula") as HTMLInputElement).value; }
    get edad() { return +(document.getElementById("inEdad") as HTMLInputElement).value; }
    get sexo() { return (document.getElementById("inSexo") as HTMLSelectElement).value; }
    get fechaNac() { return (document.getElementById("inFechaNac") as HTMLInputElement).value; }
    get tipoEntrada() { return (document.getElementById("inTipo") as HTMLSelectElement).value; }
    get esEstudiante() { return (document.getElementById("inEstudiante") as HTMLSelectElement).value === "S"; }

    mostrar() { 
        this.limpiar();
        this.modalInstance.show(); 
    }
    ocultar() { this.modalInstance.hide(); }

    private limpiar() {
        ["inNombre", "inApellido", "inCedula", "inEdad", "inFechaNac"].forEach(id => {
            (document.getElementById(id) as HTMLInputElement).value = "";
        });
    }

    onAceptar(callback: () => void) { (document.getElementById("btAceptar") as HTMLButtonElement).onclick = callback; }
    onCancelar(callback: () => void) { /* Se cierra vía data-bs-dismiss */ }
}