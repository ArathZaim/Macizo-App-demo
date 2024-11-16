import { inject, Injectable } from '@angular/core';
import { Salud } from './../model/Salud.interface';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario.interface';
@Injectable({
  providedIn: 'root',
})
export class SaludService {
  private http = inject(HttpClient);
  usuario?: Usuario;
  nuevaSalud(salud: Salud) {
    return this.http.post<Salud>(
      'http://localhost:8080/macizoapp/salud',
      salud
    );
  }
  obtenerUsuario(id_usuario_frg: number) {
    return this.http.get<Usuario>(
      `http://localhost:8080/macizoapp/usuarios/${id_usuario_frg}`
    );
  }
}
