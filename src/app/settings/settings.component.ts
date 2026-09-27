export const environment = {
    apiUrl: 'https://TU-URL-DE-NGROK.ngrok-free.app'
};
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {}

    buscarArticulos(texto: string) {

        return this.http.get<any[]>(
            `${environment.apiUrl}/api/articulos`,
            {
                params: {
                    busqueda: texto
                }
            }
        );
    }
}
buscar() {

    this.apiService
        .buscarArticulos(this.textoBusqueda)
        .subscribe(resultados => {
            this.articulos = resultados;
        });
}
