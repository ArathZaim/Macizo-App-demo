import { CommonModule } from '@angular/common';
import { Usuario } from './../../model/Usuario.interface';
import { Component, inject, OnInit } from '@angular/core';
import { HeaderMacizoComponent } from '../header-macizo/header-macizo.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsuarioService } from '../../service/Usuario.service';

@Component({
  selector: 'app-logeo-macizo',
  standalone: true,
  imports: [
    HeaderMacizoComponent,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './logeo-macizo.component.html',
  styleUrl: './logeo-macizo.component.css',
})
export default class LogeoMacizoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private usuarioService = inject(UsuarioService);

  form?: FormGroup;
  Usuario?: Usuario;
  errors: String[] = [];
  email: string = '';

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(15), Validators.max(95)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  nuevo() {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    //let request: Observable<Usuario>;
    const usuarioN = this.form!.value;
    this.usuarioService.compartirUsuario(usuarioN);
    this.email = this.usuarioService.usuario!.email;
    this.usuarioService.existenciaU(this.email).subscribe({
      next: (response) => {
        this.router.navigate(['/objetivo']);
      },
      error: (error) => {
        if (error.status === 401) {
          alert(
            'UPS!, OCURRIO UN ERROR INESPERADO EN EL SISTEMA MACIZO, GUARDE LA CALMA EN BREVE LO RESOLVEREMOS'
          );
        } else if (error.status == 404) {
          alert(
            'UPS!, OCURRIO UN ERROR INESPERADO EN EL SISTEMA MACIZO, GUARDE LA CALMA EN BREVE LO RESOLVEREMOS'
          );
        } else {
          alert('ESTE CORREO YA ESTA REGISTRADO');
        }
      },
    });
    /*
    request = this.usuarioService.nuevo(usuarioN);
    request.subscribe({
      next: () => {
        this.errors = [];
        this.router.navigate(['/objetivo']);
      },
      error: (response) => {
        this.errors = response.error.errors;
      },
    });
  }*/
  }
}
