import Cl_mAsistenteRegular from "./Cl_mAsistenteRegular.js";
export default class Cl_mEvento {
    cntTotal = 0;
    acRecaudado = 0;
    cntMenores = 0;
    cntMayores = 0;
    cntRegular = 0;
    cntVIP = 0;
    procesarAsistente(a) {
        this.cntTotal++;
        this.acRecaudado += a.precioPagar();
        if (a.edad < 18)
            this.cntMenores++;
        else
            this.cntMayores++;
        if (a instanceof Cl_mAsistenteRegular)
            this.cntRegular++;
        else
            this.cntVIP++;
    }
    totalAsistentes() { return this.cntTotal; }
    totalRecaudado() { return this.acRecaudado; }
    porcMenores() { return this.cntTotal > 0 ? (this.cntMenores / this.cntTotal) * 100 : 0; }
    porcMayores() { return this.cntTotal > 0 ? (this.cntMayores / this.cntTotal) * 100 : 0; }
    porcRegular() { return this.cntTotal > 0 ? (this.cntRegular / this.cntTotal) * 100 : 0; }
    porcVIP() { return this.cntTotal > 0 ? (this.cntVIP / this.cntTotal) * 100 : 0; }
}
//# sourceMappingURL=Cl_mEvento.js.map