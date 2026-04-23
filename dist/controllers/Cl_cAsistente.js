import Cl_mAsistenteRegular from "../models/Cl_mAsistenteRegular.js";
import Cl_mAsistenteVIP from "../models/Cl_mAsistenteVIP.js";
export default class Cl_cAsistente {
    vista;
    callback = null;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.aceptar());
        this.vista.onCancelar(() => this.cancelar());
    }
    iniciar(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    aceptar() {
        // Validación de los nuevos campos obligatorios
        if (!this.vista.nombre ||
            !this.vista.apellido ||
            isNaN(this.vista.cedula) ||
            isNaN(this.vista.edad) ||
            !this.vista.fechaNac) {
            alert("Por favor, rellene todos los campos del asistente.");
            return;
        }
        let asistenteNuevo;
        if (this.vista.tipoEntrada === "1") {
            asistenteNuevo = new Cl_mAsistenteRegular(this.vista.nombre, this.vista.apellido, this.vista.cedula, this.vista.edad, this.vista.sexo, this.vista.fechaNac, this.vista.esEstudiante);
        }
        else {
            asistenteNuevo = new Cl_mAsistenteVIP(this.vista.nombre, this.vista.apellido, this.vista.cedula, this.vista.edad, this.vista.sexo, this.vista.fechaNac);
        }
        if (this.callback)
            this.callback(asistenteNuevo);
        this.vista.ocultar();
    }
    cancelar() {
        if (this.callback)
            this.callback(null);
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cAsistente.js.map