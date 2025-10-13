import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecolectorNavbar } from '../../components/recolector-navbar/recolector-navbar';
import { RecolectorSidebar } from '../../components/recolector-sidebar/recolector-sidebar';

@Component({
  selector: 'app-recolector-layout',
  imports: [RouterOutlet, RecolectorNavbar, RecolectorSidebar],
  templateUrl: './recolector-layout.html',
  styleUrl: './recolector-layout.css'
})
export class RecolectorLayout {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
