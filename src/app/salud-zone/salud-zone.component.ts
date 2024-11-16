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
  styleUrl: './salud-zone.component.css',
})
export default class SaludZoneComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private routerActivade = inject(ActivatedRoute);
  generoo: String = '';
  form?: FormGroup;
  Salud?: Salud;
  errors: String[] = [];

  private saludService = inject(SaludService);
  ngOnInit(): void {
    this.form = this.fb.group({
      id_usuario_frg:[1, Validators.required],
      peso: ['', [Validators.required]],
      altura: ['', [Validators.required]],
      imc: ['', [Validators.required]],
      genero: ['', Validators.required],
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
    const saludNueva = this.form!.value;
    this.saludService.nuevaSalud(saludNueva).subscribe({
      next: (response) => {
        console.log('Salud guardada con éxito:', response);
        this.router.navigate(['/recetas']);
      },
      error: (err) => console.error('Error al guardar:', err),
    });
  }
}
