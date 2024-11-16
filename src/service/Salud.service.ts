import { inject, Injectable } from '@angular/core';
import { Salud } from './../model/Salud.interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SaludService {
  private http = inject(HttpClient);

  nuevaSalud(salud: Salud) {
    return this.http.post<Salud>(
      'http://localhost:8080/macizoapp/salud',
      salud
    );
  }
}
