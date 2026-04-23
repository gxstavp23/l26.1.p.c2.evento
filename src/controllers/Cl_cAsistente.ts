import { I_vAsistente } from "../interfaces/I_vAsistente.js";
import Cl_mAsistente from "../models/Cl_mAsistente.js";
import Cl_mAsistenteRegular from "../models/Cl_mAsistenteRegular.js";
import Cl_mAsistenteVIP from "../models/Cl_mAsistenteVIP.js";

export default class Cl_cAsistente {
    private callback: ((asistente: Cl_mAsistente | null) => void) | null = null;

    constructor(private vista: I_vAsistente) {
        this.vista.onAceptar(() => this.aceptar());
        this.vista.onCancelar(() => this.cancelar());
    }

    iniciar(callback: (asistente: Cl_mAsistente | null) => void) {
        this.callback = callback;
        this.vista.mostrar();
    }

    private aceptar() {
        // Validación de los nuevos campos obligatorios
        if (
            !this.vista.nombre || 
            !this.vista.apellido || 
            isNaN(this.vista.cedula) || 
            isNaN(this.vista.edad) || 
            !this.vista.fechaNac
        ) {
            alert("Por favor, rellene todos los campos del asistente.");
            return;
        }

        let asistenteNuevo: Cl_mAsistente;

        if (this.vista.tipoEntrada === "1") {
            asistenteNuevo = new Cl_mAsistenteRegular(
                this.vista.nombre,
                this.vista.apellido,
                this.vista.cedula,
                this.vista.edad,
                this.vista.sexo,
                this.vista.fechaNac,
                this.vista.esEstudiante
            );
        } else {
            asistenteNuevo = new Cl_mAsistenteVIP(
                this.vista.nombre,
                this.vista.apellido,
                this.vista.cedula,
                this.vista.edad,
                this.vista.sexo,
                this.vista.fechaNac
            );
        }

        if (this.callback) this.callback(asistenteNuevo);
        this.vista.ocultar();
    }

    private cancelar() {
        if (this.callback) this.callback(null);
        this.vista.ocultar();
    }
}