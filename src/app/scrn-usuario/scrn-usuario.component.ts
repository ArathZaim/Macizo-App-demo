import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../service/Usuario.service';

@Component({
  selector: 'app-scrn-usuario',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './scrn-usuario.component.html',
  styleUrl: './scrn-usuario.component.css',
})
export default class ScrnUsuarioComponent implements OnInit {
  usuarioAct: any;
  namee?: string;
  usi: number = 0;
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);

  ngOnInit(): void {
    this.usuarioAct = { ...this.usuarioService.usuario };
    this.namee = String(localStorage.getItem('nombre'));

    this.usi = Number(localStorage.getItem('id'));
  }

  logout(): void {
    localStorage.clear();

    this.router.navigate(['/Sign']);
  }
  //this.id_usuario = Number(localStorage.getItem('id_usuario'));
}
