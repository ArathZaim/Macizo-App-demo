import { Usuario } from './../../model/Usuario.interface';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderMacizoComponent } from '../header-macizo/header-macizo.component';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../service/Usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-objetivo-scrn',
  standalone: true,
  imports: [RouterModule, HeaderMacizoComponent, CommonModule],
  templateUrl: './objetivo-scrn.component.html',
  styleUrl: './objetivo-scrn.component.css',
})
export default class ObjetivoScrnComponent {
  private router = inject(Router);

  selectedOption?: string;
  usuarioN: any;
  private usuarioService = inject(UsuarioService);
  errors: String[] = [];

  selectOption(option: string) {
    this.selectedOption = option;

    console.log(this.selectedOption);
  }

  almacenU() {
    if (!this.selectedOption) {
      console.error('No se ha seleccionado ningún objetivo.');
      this.errors.push('Por favor, selecciona un objetivo.');
      return;
    }
    this.usuarioN = this.usuarioService.usuario;
    this.usuarioN.objetivo = this.selectedOption;

    this.usuarioService.nuevo(this.usuarioN);
    let request: Observable<Usuario>;
    request = this.usuarioService.nuevo(this.usuarioN);
    request.subscribe({
      next: () => {
        this.errors = [];

        this.router.navigate(['/Salud']);
      },
      error: (response) => {
        this.errors = response.error.errors;
      },
    });
  }
}
