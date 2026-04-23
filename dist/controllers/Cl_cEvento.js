import Cl_mEvento from "../models/Cl_mEvento.js";
export default class Cl_cEvento {
    vista;
    cAsistente;
    mEvento = new Cl_mEvento();
    constructor(vista, cAsistente) {
        this.vista = vista;
        this.cAsistente = cAsistente;
        this.vista.onNuevoAsistente(() => this.procesarAsistente());
    }
    procesarAsistente() {
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
//# sourceMappingURL=Cl_cEvento.js.map