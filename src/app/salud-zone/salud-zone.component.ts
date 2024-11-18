import { SaludService } from './../../service/Salud.service';
import { Salud } from './../../model/Salud.interface';
import { Component, inject, OnInit } from '@angular/core';
import { HeaderMacizoComponent } from '../header-macizo/header-macizo.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Usuario } from '../../model/Usuario.interface';
import { UsuarioService } from '../../service/Usuario.service';

@Component({
  selector: 'app-salud-zone',
  standalone: true,
  imports: [
    HeaderMacizoComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './salud-zone.component.html',
  styleUrls: ['./salud-zone.component.css'],
})
export default class SaludZoneComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private routerActivade = inject(ActivatedRoute);
  generoo: String = '';
  form?: FormGroup;
  salud?: Salud;
  errors: String[] = [];
  usuarioEE: any;
  id_usuario_frg: number = 0;
  private saludService = inject(SaludService);
  private usuarioService = inject(UsuarioService);

  ngOnInit(): void {
    /* this.routerActivade.queryParams.subscribe((params) => {
      const id_usuario = params['id'];
      if (id_usuario) {
        this.id_usuario_frg = id_usuario; // Asignar al campo correspondiente
      } else {
        console.error('ID de usuario no encontrado');
        this.router.navigate(['/usuario']); // Redirige en caso de error
      }
    });
*/
    this.form = this.fb.group({
      peso: ['', [Validators.required]],
      altura: ['', [Validators.required]],
      imc: ['', [Validators.required]],
      genero: ['', Validators.required],
    });
    this.routerActivade.queryParams.subscribe(params => {
      this.id_usuario_frg = params['id'];
      if (this.id_usuario_frg) {
        this.llamado();
      }
    });

  }

  llamado() {
   // const idUsuario = 1852;
    //this.id_usuario_frg = this.usuarioService.usuario!.id_usuario;
    this.saludService.getUsalud(this.id_usuario_frg).subscribe({
      next: (usuario) => {
        this.usuarioEE = usuario;
      },
      error: (err) => console.error('Error al obtener usuario:', err),
    });
  }
  generoSeleccionado: string = '';

  Gatauba(gender: string) {
    return (this.generoSeleccionado = gender);
  }

  nuevaSalud() {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    //this.salud = this.form!.value;
    //this.salud!.id_usuario_frg = this.usuarioEE; // Incluye el objeto Usuario completo
    //this.id_usuario_frg = this.usuarioService.usuario!.id_usuario;
    const saludNueva = {
      ...this.form!.value,
      id_usuario_frg: this.usuarioEE,
      //id_usuario_frg: this.id_usuario_frg, // Adjunta el ID directamente
    };
    this.saludService.nuevaSalud(saludNueva).subscribe({
      next: (response) => {
        console.log('Salud guardada con éxito:', response);
        this.router.navigate(['/ScrnU']);
      },
      error: (err) => console.error('Error al guardar:', err),
    });
  }
}
