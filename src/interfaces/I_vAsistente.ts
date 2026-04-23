export interface I_vAsistente {
    get nombre(): string;
    get apellido(): string;
    get cedula(): number;
    get edad(): number;
    get sexo(): string;
    get fechaNac(): string;
    get tipoEntrada(): string;
    get esEstudiante(): boolean;
    mostrar(): void;
    ocultar(): void;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}