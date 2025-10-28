import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-campanias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './campanias.html',
  styleUrl: './campanias.css'
})
export class Campanias {
  searchTerm = '';
  filtro = 'todas';

  ecoTip = 'Recuerda: Participar en campañas de reciclaje comunitario multiplica tu impacto positivo. 🌎';

  campanias = [
    { titulo: 'Reciclatón Escolar', descripcion: 'Recolecta materiales reciclables en instituciones educativas.', fecha: '12 - 18 Oct', lugar: 'Colegio San Martín', estado: 'activa' },
    { titulo: 'Semana Verde', descripcion: 'Ayuda a limpiar parques y zonas públicas de tu distrito.', fecha: '25 - 30 Oct', lugar: 'Parque Central', estado: 'proxima' },
    { titulo: 'Eco Canje', descripcion: 'Canjea tus puntos por productos ecológicos y sustentables.', fecha: '05 - 10 Sep', lugar: 'Centro Cívico', estado: 'finalizada' },
    { titulo: 'Reto sin Plástico', descripcion: 'Evita el uso de plásticos de un solo uso por una semana.', fecha: '20 - 27 Oct', lugar: 'Todo el distrito', estado: 'activa' },
    { titulo: 'Reciclatón Escolar', descripcion: 'Recolecta materiales reciclables en instituciones educativas.', fecha: '12 - 18 Oct', lugar: 'Colegio San Martín', estado: 'activa' },
    { titulo: 'Semana Verde', descripcion: 'Ayuda a limpiar parques y zonas públicas de tu distrito.', fecha: '25 - 30 Oct', lugar: 'Parque Central', estado: 'proxima' },
  ];

  filtrarCampanias() {
    return this.campanias.filter(c => {
      const coincideTexto = c.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            c.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase());
      const coincideFiltro = this.filtro === 'todas' || c.estado === this.filtro;
      return coincideTexto && coincideFiltro;
    });
  }
}
