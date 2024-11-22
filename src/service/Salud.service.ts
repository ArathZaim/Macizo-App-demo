import { inject, Injectable } from '@angular/core';
import { Salud } from './../model/Salud.interface';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario.interface';
import { Observable } from 'rxjs';
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

  getTodaSalud() {
    return this.http.get<Salud[]>(`http://localhost:8080/macizoapp/salud/T`);
  }

  getUsalud(id_usuario_frg: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      `http://localhost:8080/macizoapp/salud/buscarU/${id_usuario_frg}`
    );
  }

  getSaludId(id_usuario: number): Observable<Salud> {
    return this.http.get<Salud>(
      `http://localhost:8080/macizoapp/salud/buscarS/${id_usuario}`
    );
  }

  getSaludIdS(id_usuario: number): Observable<Salud> {
    return this.http.get<Salud>(
      `http://localhost:8080/macizoapp/salud/usuarioIS/${id_usuario}`
    );
  }

  actualizarSalud(id: number, salud: Salud) {
    return this.http.post<Salud>(
      `http://localhost:8080/macizoapp/salud/actualizar/${id}`,
      salud
    );
  }
}
