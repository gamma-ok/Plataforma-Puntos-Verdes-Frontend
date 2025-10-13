import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {
  id = 1;
  username = 'gamma';
  password = '********';
  nombre = 'Santiago';
  apellido = 'Gamarra';
  email = 'santiagogamarra@gmail.com';
  celular = '+51 987 654 321';
  estado = 'Activo';
  perfil = '/assets/img/default.png';
  puntos = 350;
  fechaRegistro = '12/08/2026';
  rol = 'Ciudadano';
  posicionRanking = 12;
  totalUsuarios = 250;
  porcentajeRanking = 70;

  entregas = [
    { fecha: '10/10/2025', material: 'Plástico', peso: 5, puntos: 20 },
    { fecha: '08/10/2025', material: 'Vidrio', peso: 3, puntos: 12 },
    { fecha: '05/10/2025', material: 'Papel', peso: 4, puntos: 15 }
  ];

  editarPerfil() {
    alert('Función editar perfil próximamente');
  }

  cerrarSesion() {
    alert('Sesión cerrada');
  }
}
