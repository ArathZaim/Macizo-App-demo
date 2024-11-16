import { Component } from '@angular/core';
import { HeaderMacizoComponent } from "../header-macizo/header-macizo.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-scrn',
  standalone: true,
  imports: [HeaderMacizoComponent, RouterModule],
  templateUrl: './home-scrn.component.html',
  styleUrl: './home-scrn.component.css',
})
export default class HomeScrnComponent {}
