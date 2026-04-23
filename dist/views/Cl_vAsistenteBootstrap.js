export default class Cl_vAsistenteBootstrap {
    modalInstance;
    constructor() {
        this.modalInstance = new bootstrap.Modal(document.getElementById("modal-asistente"));
    }
    get nombre() { return document.getElementById("inNombre").value; }
    get apellido() { return document.getElementById("inApellido").value; }
    get cedula() { return +document.getElementById("inCedula").value; }
    get edad() { return +document.getElementById("inEdad").value; }
    get sexo() { return document.getElementById("inSexo").value; }
    get fechaNac() { return document.getElementById("inFechaNac").value; }
    get tipoEntrada() { return document.getElementById("inTipo").value; }
    get esEstudiante() { return document.getElementById("inEstudiante").value === "S"; }
    mostrar() {
        this.limpiar();
        this.modalInstance.show();
    }
    ocultar() { this.modalInstance.hide(); }
    limpiar() {
        ["inNombre", "inApellido", "inCedula", "inEdad", "inFechaNac"].forEach(id => {
            document.getElementById(id).value = "";
        });
    }
    onAceptar(callback) { document.getElementById("btAceptar").onclick = callback; }
    onCancelar(callback) { }
}
//# sourceMappingURL=Cl_vAsistenteBootstrap.js.map