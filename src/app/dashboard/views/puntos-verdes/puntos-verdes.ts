import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-puntos-verdes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './puntos-verdes.html',
  styleUrl: './puntos-verdes.css'
})
export class PuntosVerdes {
  puntosVerdes = [
    {
      nombre: 'Punto Verde Central',
      descripcion: 'Centro de acopio principal donde se reciben plásticos, vidrios y papeles.',
      direccion: 'Av. Los Olivos 123, Los Olivos',
      latitud: '-12.045',
      longitud: '-77.030',
      estado: 'activo'
    },
    {
      nombre: 'Punto Verde Miraflores',
      descripcion: 'Ubicado en el parque Kennedy, ideal para residuos orgánicos y reciclables.',
      direccion: 'Calle Schell 275, Miraflores',
      latitud: '-12.121',
      longitud: '-77.030',
      estado: 'mantenimiento'
    },
    {
      nombre: 'Punto Verde Surco',
      descripcion: 'Centro ecológico en la municipalidad de Surco para reciclaje general.',
      direccion: 'Av. Caminos del Inca 450, Surco',
      latitud: '-12.149',
      longitud: '-76.990',
      estado: 'activo'
    },
    {
      nombre: 'Punto Verde Central',
      descripcion: 'Centro de acopio principal donde se reciben plásticos, vidrios y papeles.',
      direccion: 'Av. Los Olivos 123, Los Olivos',
      latitud: '-12.045',
      longitud: '-77.030',
      estado: 'activo'
    },
    {
      nombre: 'Punto Verde Miraflores',
      descripcion: 'Ubicado en el parque Kennedy, ideal para residuos orgánicos y reciclables.',
      direccion: 'Calle Schell 275, Miraflores',
      latitud: '-12.121',
      longitud: '-77.030',
      estado: 'mantenimiento'
    },
    {
      nombre: 'Punto Verde Surco',
      descripcion: 'Centro ecológico en la municipalidad de Surco para reciclaje general.',
      direccion: 'Av. Caminos del Inca 450, Surco',
      latitud: '-12.149',
      longitud: '-76.990',
      estado: 'activo'
    }
  ];
}
