export default class Cl_vEventoBootstrap {
    btNuevo = document.getElementById("main_btNuevoAsistente");
    onNuevoAsistente(callback) { this.btNuevo.onclick = callback; }
    reportar(datos) {
        document.getElementById("lblTotalAsistentes").innerHTML = datos.totalAsistentes;
        document.getElementById("lblTotalRecaudado").innerHTML = datos.totalRecaudado.toFixed(2);
        document.getElementById("lblPorcMenores").innerHTML = datos.porcMenores.toFixed(2);
        document.getElementById("lblPorcMayores").innerHTML = datos.porcMayores.toFixed(2);
        document.getElementById("lblPorcRegular").innerHTML = datos.porcRegular.toFixed(2);
        document.getElementById("lblPorcVIP").innerHTML = datos.porcVIP.toFixed(2);
    }
}
//# sourceMappingURL=Cl_vEventoBootstrap.js.map