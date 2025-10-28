import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entregas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entregas.html',
  styleUrl: './entregas.css'
})
export class Entregas {
  detalleVisible = false;
  entregaSeleccionada: any = null;

  entregas = [
    {
      fecha: '10/10/2025',
      tipo: 'Plástico PET',
      peso: 5,
      unidad: 'kg',
      puntoVerde: 'Punto Verde Central',
      puntos: 50,
      estado: 'Aprobado',
      descripcion: 'Entrega de botellas PET limpias.',
      fechaValidacion: '11/10/2025',
      campaniaAsignada: 'Recicla por tu Barrio',
      validadoPor: 'Carlos López',
      observaciones: 'Material limpio y bien separado.',
      respuestaAdmin: 'Excelente aporte, gracias!'
    },
    {
      fecha: '08/10/2025',
      tipo: 'Cartón',
      peso: 3,
      unidad: 'kg',
      puntoVerde: 'Colegio San Martín',
      puntos: 0,
      estado: 'Desaprobado',
      descripcion: 'Cartones húmedos por lluvia.',
      fechaValidacion: '09/10/2025',
      campaniaAsignada: null,
      validadoPor: 'Ana Torres',
      observaciones: 'Material mojado y dañado.',
      respuestaAdmin: 'Recuerda mantener el material seco.'
    },
    {
      fecha: '12/10/2025',
      tipo: 'Vidrio',
      peso: 4,
      unidad: 'kg',
      puntoVerde: 'Municipalidad Central',
      puntos: 0,
      estado: 'Pendiente',
      descripcion: 'Botellas y frascos de vidrio transparente.',
      fechaValidacion: null,
      campaniaAsignada: 'Reutiliza y Cuida',
      validadoPor: null,
      observaciones: null,
      respuestaAdmin: null
    }
  ];

  verDetalle(entrega: any) {
    this.entregaSeleccionada = entrega;
    this.detalleVisible = true;
  }

  cerrarDetalle() {
    this.detalleVisible = false;
    this.entregaSeleccionada = null;
  }
}
