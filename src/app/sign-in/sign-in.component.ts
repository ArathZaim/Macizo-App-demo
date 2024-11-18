import { Usuario } from './../../model/Usuario.interface';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeaderMacizoComponent } from '../header-macizo/header-macizo.component';
import { UsuarioService } from '../../service/Usuario.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    HeaderMacizoComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export default class SignInComponent implements OnInit {
  private usuarioser = inject(UsuarioService);
  private fb = inject(FormBuilder);
  encontrado?: Usuario;
  form?: FormGroup;
  errors: String[] = [];
  private router = inject(Router);

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],

      password: ['', Validators.required],
    });
  }

  busqueda() {
    const email = this.form!.get('email')!.value;
    const password = this.form!.get('password')!.value;

    this.usuarioser.validarU(email, password).subscribe({
      next: (response) => {
        console.log('Usuario encontrado:', response);
        this.router.navigate(['/']);
      },
      error: (error) => {
        if (error.status === 401) {
          alert('Contraseña incorrecta');
        } else if (error.status === 404) {
          alert('Usuario no encontrado');
        } else {
          console.error('Error inesperado:', error);
        }
      },
    });
  }
}
