import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderMacizoComponent } from '../header-macizo/header-macizo.component';
import { Usuario } from '../../model/Usuario.interface';
import { UsuarioService } from '../../service/Usuario.service';

@Component({
  selector: 'app-testeo-zn',
  standalone: true,
  imports: [RouterModule, HeaderMacizoComponent],
  templateUrl: './testeo-zn.component.html',
  styleUrl: './testeo-zn.component.css',
})
export default class TesteoZnComponent {
  usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.Cargar();
  }
  private usuarioService = inject(UsuarioService);

  Cargar() {
    this.usuarioService.GetallUs().subscribe((usus) => {
      this.usuarios = usus;
    });
  }
}
