import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-ciudadano-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ciudadano-inicio.html',
  styleUrl: './ciudadano-inicio.css'
})
export class CiudadanoInicio implements AfterViewInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  username = 'Santiago';
  puntos = 350;
  impacto = 15;
  ecoTip = '¿Sabías que reciclar una lata de aluminio ahorra suficiente energía para hacer funcionar un televisor por 3 horas?';
  campanias = [
    { titulo: 'Reciclatón Escolar', descripcion: 'Participa llevando tus residuos reciclables al punto más cercano.' },
    { titulo: 'Semana Verde', descripcion: 'Contribuye en la recolección masiva de plástico PET.' },
    { titulo: 'Eco Canje', descripcion: 'Intercambia tus puntos por premios sostenibles.' }
  ];

  greeting = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    const hour = new Date().getHours();
    this.greeting = hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches';
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.ngZone.runOutsideAngular(() => {
      let attempts = 0;

      const tryInitChart = () => {
        const canvas = this.chartCanvas?.nativeElement;
        if (canvas && canvas.offsetParent !== null) {
          this.initChart(canvas);
        } else if (attempts < 10) {
          attempts++;
          setTimeout(tryInitChart, 100);
        }
      };

      tryInitChart();
    });
  }

  private initChart(canvas: HTMLCanvasElement) {
    if (Chart.getChart(canvas)) Chart.getChart(canvas)?.destroy();

    this.chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Plástico', 'Vidrio', 'Papel', 'Metal'],
        datasets: [
          {
            data: [45, 25, 20, 10],
            backgroundColor: ['#8ab900', '#56b4d3', '#f7d154', '#f27360'],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: { display: true, position: 'bottom' }
        }
      }
    });
  }
}