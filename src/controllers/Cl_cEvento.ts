import { I_vEvento } from "../interfaces/I_vEvento.js";
import Cl_mEvento from "../models/Cl_mEvento.js";
import Cl_cAsistente from "./Cl_cAsistente.js";

export default class Cl_cEvento {
    private mEvento = new Cl_mEvento();

    constructor(private vista: I_vEvento, private cAsistente: Cl_cAsistente) {
        this.vista.onNuevoAsistente(() => this.procesarAsistente());
    }

    private procesarAsistente() {
        this.cAsistente.iniciar((asistente) => {
            if (asistente !== null) {
                this.mEvento.procesarAsistente(asistente);
                this.vista.reportar({
                    totalAsistentes: this.mEvento.totalAsistentes(),
                    totalRecaudado: this.mEvento.totalRecaudado(),
                    porcMenores: this.mEvento.porcMenores(),
                    porcMayores: this.mEvento.porcMayores(),
                    porcRegular: this.mEvento.porcRegular(),
                    porcVIP: this.mEvento.porcVIP()
                });
            }
        });
    }
}