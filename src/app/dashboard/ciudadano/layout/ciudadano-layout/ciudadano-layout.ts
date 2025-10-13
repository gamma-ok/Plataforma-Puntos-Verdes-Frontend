import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CiudadanoNavbar } from '../../components/ciudadano-navbar/ciudadano-navbar';
import { CiudadanoSidebar } from '../../components/ciudadano-sidebar/ciudadano-sidebar';

@Component({
  selector: 'app-ciudadano-layout',
  imports: [RouterOutlet, CiudadanoNavbar, CiudadanoSidebar],
  templateUrl: './ciudadano-layout.html',
  styleUrl: './ciudadano-layout.css'
})
export class CiudadanoLayout {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
