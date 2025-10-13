import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-recolector-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recolector-inicio.html',
  styleUrl: './recolector-inicio.css'
})
export class RecolectorInicio implements AfterViewInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  username = 'Santiago';
  entregasPendientes = 5;
  entregasCompletadas = 48;
  rutasActivas = 3;
  horasTrabajadas = 120;
  impactoAmbiental = 84;
  ecoTip = 'Usa rutas optimizadas para reducir el consumo de combustible y las emisiones de CO₂.';

  rutasProgramadas = [
    { nombre: 'Ruta Norte', zona: 'San Martín de Porres', fecha: '13/10/2025 - 09:00 a.m.' },
    { nombre: 'Ruta Centro', zona: 'Cercado de Lima', fecha: '13/10/2025 - 02:00 p.m.' },
    { nombre: 'Ruta Sur', zona: 'Chorrillos', fecha: '14/10/2025 - 08:30 a.m.' }
  ];

  alertas = [
    { titulo: 'Entrega retrasada', descripcion: 'Se reportó un retraso en la zona de Surco.' },
    { titulo: 'Nuevo punto de recolección', descripcion: 'Se agregó un nuevo punto en Miraflores.' }
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
      type: 'bar',
      data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [
          {
            label: 'Entregas completadas',
            data: [6, 8, 7, 9, 10, 5, 3],
            backgroundColor: '#8ab900',
            borderRadius: 8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, ticks: { color: '#004080' } },
          x: { ticks: { color: '#004080' } }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}