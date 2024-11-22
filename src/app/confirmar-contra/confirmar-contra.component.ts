import { CommonModule } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../service/Usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-contra',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confirmar-contra.component.html',
  styleUrl: './confirmar-contra.component.css',
})
export default class ConfirmarContraComponent {
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);

  token: string = '';
  password: string = '';
  errors: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.token = params['token']; // El token se extrae de los parámetros de la URL
    });
  }

  cambiarContrasena() {
    if (this.token) {
      this.usuarioService
        .cambiarContrasena(this.password, this.token)
        .subscribe({
          next: () => {
            this.router.navigate(['/login']); 
          },
          error: (response) => {
            this.errors = response.error?.errors || [
              'Ocurrió un error inesperado.',
            ];
            console.error('Detalles del error:', response);
          },
        });
    } else {
      console.error('Token no encontrado');
    }
  }
}
