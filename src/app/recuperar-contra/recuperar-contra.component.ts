import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../service/Usuario.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recuperar-contra',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './recuperar-contra.component.html',
  styleUrl: './recuperar-contra.component.css',
})
export default class RecuperarContraComponent {
  email: string = '';
  errors: String[] = [];
  token:string="";
  private router = inject(Router);
  private route = inject(ActivatedRoute);


  private usuarioService = inject(UsuarioService);

  solicitarCambioContrasena() {
    this.usuarioService.solicitarCambioContraseña(this.email).subscribe({
      next: () => {
        this.router.navigate(['/resContra']);
      },
      error: (response) => {
        this.errors = response.error?.errors || [
          'Ocurrió un error inesperado.',
        ];
        console.error('Detalles del error:', response);
      },
    });
  }
}
