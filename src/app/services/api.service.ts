import { ApplicationSettings } from '@nativescript/core';

export class SettingsService {

    obtenerUsuario(): string {
        return ApplicationSettings.getString(
            'usuario',
            ''
        );
    }
