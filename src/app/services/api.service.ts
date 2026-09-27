import { ApplicationSettings } from '@nativescript/core';

export class SettingsService {

    obtenerUsuario(): string {
        return ApplicationSettings.getString(
            'usuario',
            ''
        );
    }

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
