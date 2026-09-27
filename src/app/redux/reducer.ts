export function reducer(
    state = initialState,
    action: any
) {

    switch (action.type) {

        case LEER_AHORA:

            return {
                ...state,
                leidos: [
                    ...state.leidos,
                    action.payload
                ]
            };

        default:
            return state;
    }
}
ngOnInit() {

    this.store
        .select(state => state.leidos)
        .subscribe(leidos => {

            this.leidos = leidos;

        });
}
