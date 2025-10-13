import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ayuda.html',
  styleUrl: './ayuda.css'
})
export class Ayuda {
  searchTerm: string = '';

  faqs = [
    {
      pregunta: '¿Cómo puedo ganar puntos verdes?',
      respuesta: 'Puedes acumular puntos registrando tus entregas de residuos reciclables en los Puntos Verdes disponibles o participando en campañas de reciclaje.',
      open: false
    },
    {
      pregunta: '¿Dónde encuentro los Puntos Verdes más cercanos?',
      respuesta: 'En la sección “Puntos Verdes” del menú, podrás ver un mapa interactivo con las ubicaciones disponibles según tu distrito.',
      open: false
    },
    {
      pregunta: '¿Qué tipo de residuos puedo entregar?',
      respuesta: 'Se aceptan residuos reciclables como papel, cartón, botellas plásticas, vidrios y latas. No se aceptan residuos orgánicos ni peligrosos.',
      open: false
    },
    {
      pregunta: '¿Cómo canjeo mis puntos por recompensas?',
      respuesta: 'En la sección “Recompensas” podrás ver el catálogo disponible y realizar tus canjes según los puntos acumulados.',
      open: false
    },
    {
      pregunta: '¿A quién contacto si tengo un problema con mi cuenta?',
      respuesta: 'Puedes comunicarte con soporte técnico a través del formulario de contacto disponible al final de esta página o en la opción “Ayuda” del menú.',
      open: false
    }
  ];

  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }

  filteredFaqs() {
    const term = this.searchTerm.toLowerCase();
    return this.faqs.filter(
      faq =>
        faq.pregunta.toLowerCase().includes(term) ||
        faq.respuesta.toLowerCase().includes(term)
    );
  }
}
