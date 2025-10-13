import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MunicipalidadNavbar } from '../../components/municipalidad-navbar/municipalidad-navbar';
import { MunicipalidadSidebar } from '../../components/municipalidad-sidebar/municipalidad-sidebar';

@Component({
  selector: 'app-municipalidad-layout',
  imports: [RouterOutlet, MunicipalidadNavbar, MunicipalidadSidebar],
  templateUrl: './municipalidad-layout.html',
  styleUrl: './municipalidad-layout.css'
})
export class MunicipalidadLayout {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
