import { I_vEvento } from "../interfaces/I_vEvento.js";

export default class Cl_vEventoPlain implements I_vEvento {
    private btNuevo: HTMLButtonElement = document.getElementById("main_btNuevoAsistente") as HTMLButtonElement;
    
    onNuevoAsistente(callback: () => void) { this.btNuevo.onclick = callback; }

    reportar(datos: any) {
        document.getElementById("lblTotalAsistentes")!.innerHTML = datos.totalAsistentes;
        document.getElementById("lblTotalRecaudado")!.innerHTML = datos.totalRecaudado.toFixed(2);
        document.getElementById("lblPorcMenores")!.innerHTML = datos.porcMenores.toFixed(2);
        document.getElementById("lblPorcMayores")!.innerHTML = datos.porcMayores.toFixed(2);
        document.getElementById("lblPorcRegular")!.innerHTML = datos.porcRegular.toFixed(2);
        document.getElementById("lblPorcVIP")!.innerHTML = datos.porcVIP.toFixed(2);
    }
}