<Label text="Nombre de usuario"></Label>

<TextField
    [(ngModel)]="usuario">
</TextField>

<Button
    text="Guardar"
    (tap)="guardar()">
</Button>
    guardarUsuario(nombre: string): void {
        ApplicationSettings.setString(
            'usuario',
            nombre
        );
    }
}
ngOnInit() {
    this.usuario = this.settingsService.obtenerUsuario();
}

guardar() {
    this.settingsService.guardarUsuario(this.usuario);
}
