import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-municipalidad-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './municipalidad-inicio.html',
  styleUrl: './municipalidad-inicio.css'
})
export class MunicipalidadInicio implements AfterViewInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  username = 'Santiago';
  totalUsuarios = 4821;
  totalEntregas = 12678;
  puntosVerdes = 32;
  campaniasActivas = 4;
  incidenciasPendientes = 6;
  tasaReciclaje = 78;
  reduccionCO2 = 3250;
  puntosEntregados = 52000;
  campaniasCompletadas = 12;

  ecoTip = 'Coordina campañas en conjunto con colegios y centros comerciales para incrementar la tasa de reciclaje.';
  alertas = [
    { titulo: 'Nuevo punto verde inactivo', descripcion: 'El punto en San Miguel no reporta actividad desde hace 3 días.' },
    { titulo: 'Alta generación de residuos', descripcion: 'El distrito de Surco superó el promedio mensual.' }
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
        if (canvas && canvas.offsetParent !== null) this.initChart(canvas);
        else if (attempts < 10) {
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
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct'],
        datasets: [
          {
            label: 'Entregas registradas',
            data: [800, 950, 1200, 1100, 1400, 1250, 1600, 1750, 1680, 1900],
            borderColor: '#004080',
            backgroundColor: 'rgba(0,64,128,0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Puntos Verdes activos',
            data: [25, 27, 29, 30, 31, 32, 32, 33, 33, 34],
            borderColor: '#8ab900',
            backgroundColor: 'rgba(138,185,0,0.1)',
            tension: 0.3,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'bottom' }
        },
        scales: {
          x: { ticks: { color: '#004080' } },
          y: { ticks: { color: '#004080' }, beginAtZero: true }
        }
      }
    });
  }
}