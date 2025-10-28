import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recompensas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recompensas.html',
  styleUrl: './recompensas.css'
})
export class RecompensasDashboard {
  puntosUsuario = 120;
  estadoSeleccionado = '';

  recompensas = [
    { nombre: 'Bolsa Ecológica', descripcion: 'Bolsa reutilizable hecha con materiales reciclados.', puntos: 50, stock: 10, estado: 'Activo' },
    { nombre: 'Botella de Acero', descripcion: 'Botella reutilizable libre de BPA.', puntos: 100, stock: 3, estado: 'Activo' },
    { nombre: 'Cuaderno Reciclado', descripcion: 'Cuaderno hecho con papel reciclado 100%.', puntos: 70, stock: 0, estado: 'Inactivo' },
    { nombre: 'Kit de Huerto Urbano', descripcion: 'Incluye semillas, compost y macetas biodegradables.', puntos: 150, stock: 5, estado: 'Activo' },
    { nombre: 'Taza de Bambú', descripcion: 'Taza reutilizable elaborada con bambú natural.', puntos: 80, stock: 0, estado: 'Inactivo' }
  ];

  puedeCanjear(puntosRequeridos: number): boolean {
    return this.puntosUsuario >= puntosRequeridos;
  }

  recompensasFiltradas() {
    if (!this.estadoSeleccionado) return this.recompensas;
    return this.recompensas.filter(r => r.estado === this.estadoSeleccionado);
  }
}
