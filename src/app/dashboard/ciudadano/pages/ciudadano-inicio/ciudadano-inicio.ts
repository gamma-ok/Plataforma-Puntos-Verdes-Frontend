import {
  Component,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
  NgZone,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { AuthService } from '../../../../services/auth';
import { PerfilService } from '../../../../services/perfil';
import { CampaniaService } from '../../../../services/campania';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-ciudadano-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ciudadano-inicio.html',
  styleUrl: './ciudadano-inicio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CiudadanoInicio implements OnInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  nombre = '';
  apellido = '';
  puntos = 0;
  impacto = 0;
  greeting = '';
  cargando = true;

  totalEntregas = 0;
  entregasAprobadas = 0;
  materialFrecuente = '';
  ultimaEntrega: any = null;
  chartData: number[] = [];
  chartLabels: string[] = [];
  chartUnidades: string[] = [];

  campanias: any[] = [];

  constructor(
    private authService: AuthService,
    private perfilService: PerfilService,
    private campaniaService: CampaniaService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.setGreeting();
    this.verificarSesionYcargarDatos();
    this.cargarCampanias();
  }

  /** SALUDO */
  private setGreeting(): void {
    const hour = new Date().getHours();
    this.greeting =
      hour < 12
        ? 'Buenos días'
        : hour < 18
          ? 'Buenas tardes'
          : 'Buenas noches';
  }

  /** VALIDACIÓN Y CARGA DE DATOS ----- */
  private verificarSesionYcargarDatos(): void {
    const user = this.authService.getUser();
    if (user) this.cargarDatosUsuario(user);
  }

  /** CARGA DATOS PERFIL & ENTREGAS */
  private cargarDatosUsuario(user: any): void {
    this.nombre = user.nombre;
    this.apellido = user.apellido;

    this.perfilService.getMiRanking().subscribe({
      next: (data) => {
        this.puntos = data?.puntos || 0;
        this.cdr.markForCheck();
      },
    });

    this.perfilService.getMisUltimasEntregas().subscribe({
      next: (entregas) => {
        if (entregas?.length) {
          this.ultimaEntrega = entregas[0];
          this.totalEntregas = entregas.length;
          this.entregasAprobadas = entregas.filter(
            (e: any) => e.estado === 'APROBADO'
          ).length;

          const conteo: Record<string, number> = {};
          const unidades: Record<string, string> = {};

          entregas.forEach((e: any) => {
            const material = e.material || 'Sin especificar';
            conteo[material] = (conteo[material] || 0) + (e.cantidad || 1);
            unidades[material] = e.unidad || 'kg';
          });

          this.materialFrecuente = Object.keys(conteo).reduce((a, b) =>
            conteo[a] > conteo[b] ? a : b
          );

          this.chartLabels = Object.keys(conteo);
          this.chartData = Object.values(conteo);
          this.chartUnidades = this.chartLabels.map((m) => unidades[m] || 'kg');

          this.impacto = this.calcularImpactoAmbiental(conteo);

          this.ngZone.runOutsideAngular(() =>
            setTimeout(() => this.initChart(), 300)
          );
        }
        this.cargando = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al cargar entregas:', err);
        this.cargando = false;
        this.cdr.markForCheck();
      },
    });
  }

  /** CALCULO IMPACTO */
  private calcularImpactoAmbiental(conteo: Record<string, number>): number {
    const factores: Record<string, number> = {
      Plástico: 1.5,
      Papel: 1.2,
      Vidrio: 0.3,
      Metal: 4.0,
      Cartón: 0.8,
    };
    let total = 0;
    for (const material in conteo) {
      const factor = factores[material] || 0.5;
      total += conteo[material] * factor;
    }
    return parseFloat(total.toFixed(2));
  }

  /** GRAFICO */
  private initChart(): void {
    if (!this.chartCanvas || !this.chartData.length) return;
    const canvas = this.chartCanvas.nativeElement;
    const existing = Chart.getChart(canvas);
    if (existing) existing.destroy();

    Chart.register(ChartDataLabels);

    new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            data: this.chartData,
            backgroundColor: ['#8ab900', '#56b4d3', '#f7d154', '#f27360', '#a77dc2'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom',
          },
          datalabels: {
            color: '#fff',
            font: {
              weight: 'bold',
              size: 14,
            },
            formatter: (value, context) => {
              const data = context.chart.data.datasets[0].data as number[];
              const total = data.reduce((acc, val) => acc + (val || 0), 0);
              const porcentaje =
                total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
              return `${porcentaje}%`;
            },
          },
          tooltip: {
            callbacks: {
              title: (tooltipItems) => {
                // Mostrar solo el nombre del material una vez
                return tooltipItems[0].label || '';
              },
              label: (tooltipItem) => {
                const valor = tooltipItem.raw as number;
                const unidad =
                  this.chartUnidades[tooltipItem.dataIndex] || 'kg';
                const data = tooltipItem.dataset.data as number[];
                const total = data.reduce((acc, val) => acc + (val || 0), 0);
                const porcentaje =
                  total > 0 ? ((valor / total) * 100).toFixed(1) : '0.0';
                return `${valor} ${unidad} (${porcentaje}%)`;
              },
            },
          },
        },
      },
    });
  }

  /** CARGA */
  private cargarCampanias(): void {
    this.campaniaService.listarActivas().subscribe({
      next: (data) => {
        this.campanias = (data || []).slice(0, 3);
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error al cargar campañas:', err),
    });
  }
}
