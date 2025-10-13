import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css'
})
export class Acerca {
  equipo = [
    { nombre: 'Santiago Gamarra', cargo: 'Director de Proyecto - CEO', foto: '/assets/img/foto-perfil.jpeg' }
  ];
}
