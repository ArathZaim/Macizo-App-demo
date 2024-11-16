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
  imports: [HeaderMacizoComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './logeo-macizo.component.html',
  styleUrl: './logeo-macizo.component.css',
})
export default class LogeoMacizoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private routerActivade = inject(ActivatedRoute);
  private usuarioService = inject(UsuarioService);

  form?: FormGroup;
  Usuario?: Usuario;
  errors: String[] = [];

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required]],
      password: ['', Validators.required],
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
    this.router.navigate(['/objetivo']);
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
