import Cl_mAsistente from "./Cl_mAsistente.js";
import Cl_mAsistenteRegular from "./Cl_mAsistenteRegular.js";

export default class Cl_mEvento {
    private cntTotal: number = 0;
    private acRecaudado: number = 0;
    private cntMenores: number = 0;
    private cntMayores: number = 0;
    private cntRegular: number = 0;
    private cntVIP: number = 0;

    procesarAsistente(a: Cl_mAsistente) {
        this.cntTotal++;
        this.acRecaudado += a.precioPagar();

        if (a.edad < 18) this.cntMenores++;
        else this.cntMayores++;

        if (a instanceof Cl_mAsistenteRegular) this.cntRegular++;
        else this.cntVIP++;
    }

    totalAsistentes(): number { return this.cntTotal; }
    totalRecaudado(): number { return this.acRecaudado; }
    
    porcMenores(): number { return this.cntTotal > 0 ? (this.cntMenores / this.cntTotal) * 100 : 0; }
    porcMayores(): number { return this.cntTotal > 0 ? (this.cntMayores / this.cntTotal) * 100 : 0; }
    porcRegular(): number { return this.cntTotal > 0 ? (this.cntRegular / this.cntTotal) * 100 : 0; }
    porcVIP(): number { return this.cntTotal > 0 ? (this.cntVIP / this.cntTotal) * 100 : 0; }
}