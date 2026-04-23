export default class Cl_vAsistentePlain {
    vista = document.getElementById("modal-asistente");
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
        this.vista.hidden = false;
    }
    ocultar() { this.vista.hidden = true; }
    limpiar() {
        ["inNombre", "inApellido", "inCedula", "inEdad", "inFechaNac"].forEach(id => {
            document.getElementById(id).value = "";
        });
    }
    onAceptar(callback) { document.getElementById("btAceptar").onclick = callback; }
    onCancelar(callback) { document.getElementById("btCancelar").onclick = callback; }
}
//# sourceMappingURL=Cl_vAsistentePlain.js.map