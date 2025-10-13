import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ranking',
  imports: [CommonModule],
  templateUrl: './ranking.html',
  styleUrl: './ranking.css'
})
export class Ranking implements OnInit {
  nombre = 'Santiago';
  apellido = 'Gamarra';
  username = 'gamma';
  rol = 'Ciudadano';
  perfil = '/assets/img/default.png';
  puntos = 1250;
  posicionRanking = 0;
  busqueda = '';
  criterioBusqueda = 'nombre'; // Nuevo

  usuariosRanking = [
    { nombre: 'Lucía', apellido: 'Vargas', username: 'lucyv', rol: 'Administradora', puntos: 3100, perfil: '/assets/img/default.png' },
    { nombre: 'Jorge', apellido: 'Mendoza', username: 'jmendo', rol: 'Usuario', puntos: 2800, perfil: '/assets/img/default.png' },
    { nombre: 'Marta', apellido: 'Cruz', username: 'martacruz', rol: 'Moderadora', puntos: 2450, perfil: '/assets/img/default.png' },
    { nombre: 'Santiago', apellido: 'Gamarra', username: 'gamma', rol: 'Usuario', puntos: 1250, perfil: '/assets/img/default.png' },
    { nombre: 'Luis', apellido: 'Salazar', username: 'lsz', rol: 'Usuario', puntos: 900, perfil: '/assets/img/default.png' },
    { nombre: 'Elena', apellido: 'Cano', username: 'ecano', rol: 'Usuario', puntos: 860, perfil: '/assets/img/default.png' },
    { nombre: 'Diego', apellido: 'Reyes', username: 'dreyes', rol: 'Usuario', puntos: 790, perfil: '/assets/img/default.png' }
  ];

  ngOnInit() {
    this.usuariosRanking.sort((a, b) => b.puntos - a.puntos);
    this.posicionRanking = this.usuariosRanking.findIndex(u => u.username === this.username) + 1;
  }

  filtrarUsuarios() {
    const filtro = this.busqueda.toLowerCase();

    return this.usuariosRanking.filter(u => {
      switch (this.criterioBusqueda) {
        case 'apellido':
          return u.apellido.toLowerCase().includes(filtro);
        case 'rol':
          return u.rol.toLowerCase().includes(filtro);
        case 'puntos':
          return u.puntos.toString().includes(filtro);
        default:
          return u.nombre.toLowerCase().includes(filtro);
      }
    });
  }
}