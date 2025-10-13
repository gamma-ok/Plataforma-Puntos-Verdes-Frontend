import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild, AfterViewInit, NgZone, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-admin-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-inicio.html',
  styleUrl: './admin-inicio.css'
})
export class AdminInicio implements AfterViewInit, OnInit {
  @ViewChild('adminChartCanvas', { static: false }) adminChartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  username = 'Santiago';
  resumen = {
    usuarios: 320,
    puntosVerdes: 15,
    campañas: 7,
    incidencias: 4
  };

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
        const canvas = this.adminChartCanvas?.nativeElement;
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
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Actividad mensual',
            data: [1200, 1900, 1700, 2100, 2600, 3100],
            borderColor: '#8ab900',
            backgroundColor: 'rgba(138,185,0,0.15)',
            fill: true,
            tension: 0.4,
            borderWidth: 3,
            pointBackgroundColor: '#8ab900',
            pointRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#2c2c2c',
            titleColor: '#fff',
            bodyColor: '#eee',
            borderWidth: 1,
            borderColor: '#8ab900'
          }
        },
        scales: {
          y: { beginAtZero: true, grid: { color: '#e0e0e0' } },
          x: { grid: { display: false } }
        }
      }
    });
  }
}
