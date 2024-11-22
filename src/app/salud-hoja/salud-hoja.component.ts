import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SaludService } from '../../service/Salud.service';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../../service/Usuario.service';

@Component({
  selector: 'app-salud-hoja',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './salud-hoja.component.html',
  styleUrl: './salud-hoja.component.css',
})
export default class SaludHojaComponent implements OnInit {
  form!: FormGroup;
  salud: any;
  idUsuario: number = 0;
  idS: number = 0;
  private usuarioser = inject(UsuarioService);

  editMode: { peso: boolean; altura: boolean; imc: boolean; genero: boolean } =
    {
      peso: false,
      altura: false,
      imc: false,
      genero: false,
    };

  constructor(private fb: FormBuilder, private saludService: SaludService) {}

  ngOnInit(): void {
    this.idS = Number(localStorage.getItem('id'));
    this.idS!=this.usuarioser.usuario?.id_usuario;
    console.log(this.idS);
    this.saludService.getSaludIdS(this.idS).subscribe((data) => {
      this.salud = data;
      this.form = this.fb.group({
        peso: [this.salud.peso],
        altura: [this.salud.altura],
        imc: [this.salud.imc],
        genero: [this.salud.genero],
      });
    });
  }

  toggleEdit(field: string) {
    //if (this.editMode[field]) {
    // Guardar cambios
    /*  this.saludService
        .updateSalud({ [field]: this.form.get(field)?.value })
        .subscribe(() => {
          console.log(`${field} actualizado con éxito`);
        });*/
    //  }
    // this.editMode[field] = !this.editMode[field];
  }
}
