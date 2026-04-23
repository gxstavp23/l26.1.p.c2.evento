export interface I_vEvento {
    onNuevoAsistente(callback: () => void): void;
    reportar(datos: any): void;
}