export const LEER_AHORA = 'LEER_AHORA';

export function leerAhora(articulo: any) {
    return {
        type: LEER_AHORA,
        payload: articulo
    };
}
leerAhora(articulo: any) {

    this.store.dispatch(
        leerAhora(articulo)
    );
}
