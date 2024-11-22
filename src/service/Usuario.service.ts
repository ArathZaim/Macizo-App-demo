import { Token } from '@angular/compiler';
import { Usuario } from './../model/Usuario.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuario?: Usuario;

  private http = inject(HttpClient);

  GetallUs() {
    return this.http.get<Usuario[]>('http://localhost:8080/macizoapp/usuarios');
  }

  solicitarCambioContraseña(email: string) {
    return this.http.post<Usuario>(
      'http://localhost:8080/macizoapp/usuarios/password-reset/request',
      email
    );
  }
  cambiarContrasena(password:string,token:string){
    return this.http.post<Usuario>(
      'http://localhost:8080/macizoapp/usuarios/password-reset/confirm',
      {password,token}
    );
  }

  nuevo(usuario: Usuario) {
    return this.http.post<Usuario>(
      'http://localhost:8080/macizoapp/usuarios',
      usuario
    );
  }

  compartirUsuario(usuario: Usuario) {
    this.usuario = usuario;
    localStorage.setItem('nombre', usuario.nombre);
    //localStorage.setItem('id', usuario.id_usuario.toString());

    console.log(this.usuario);
  }

  obtenerUsuario(id: number) {
    return this.http.get<Usuario>(
      `http://localhost:8080/macizoapp/usuarios/id/${id}`
    );
  }

  validarU(email: string, password: string): Observable<Usuario> {
    return this.http.get<Usuario>(
      `http://localhost:8080/macizoapp/usuarios/email/${email}/password/${password}`
    );
  }

  existenciaU(email: string): Observable<string> {
    return this.http.get<string>(
      `http://localhost:8080/macizoapp/usuarios/existenciaU/${email}`
    );
  }



}
