import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scrn-usuario',
  standalone: true,
  imports: [],
  templateUrl: './scrn-usuario.component.html',
  styleUrl: './scrn-usuario.component.css',
})
export default class ScrnUsuarioComponent {
  private router = inject(Router);

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
