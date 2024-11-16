import { Usuario } from './../model/Usuario.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuario?: Usuario;

  private http = inject(HttpClient);

  GetallUs() {
    return this.http.get<Usuario[]>('http://localhost:8080/macizoapp/usuarios');
  }

  nuevo(usuario: Usuario) {
    return this.http.post<Usuario>(
      'http://localhost:8080/macizoapp/usuarios',
      usuario
    );
  }

  compartirUsuario(usuario: Usuario) {
    this.usuario = usuario;
    console.log(this.usuario);
  }
}
