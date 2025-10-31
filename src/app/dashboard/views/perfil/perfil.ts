import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth';
import { PerfilService } from '../../../services/perfil';
import { RouterModule } from '@angular/router';

type RolTipo = 'CIUDADANO' | 'RECOLECTOR' | 'MUNICIPALIDAD' | 'ADMIN';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Perfil implements OnInit {
  idUsuario = 0;
  nombre = '';
  apellido = '';
  username = '';
  rol = '';
  email = '';
  celular = '';
  estado = '';
  fechaRegistro = '';
  perfil = '/assets/img/default.png';

  mostrarEditor = false;
  mostrarOpcionesFoto = false;
  cargando = true;

  colorRol = '';
  fondoRol = '';

  posicion = 0;
  totalUsuarios = 0;
  puntos = 0;
  progreso = 0;

  formData = { nombre: '', apellido: '', email: '', celular: '' };
  ultimasEntregas: any[] = [];

  constructor(
    private authService: AuthService,
    private perfilService: PerfilService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.cargarDesdeCache();
    this.obtenerDatosServidor();
    this.obtenerMiRanking();
    this.obtenerUltimasEntregas();
  }

  private cargarDesdeCache(): void {
    const user = this.authService.getUser();
    if (user) {
      this.asignarDatos(user);
      this.cargando = false;
    }
  }

  private obtenerDatosServidor(): void {
    this.perfilService.getPerfil().subscribe({
      next: (data) => {
        this.asignarDatos(data);
        this.authService.setUser(data);
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al obtener perfil:', err);
        this.cargando = false;
        this.cdr.markForCheck();
      },
    });
  }

  rolRaw: RolTipo = 'CIUDADANO';
  tituloHistorial = 'Historial de entregas recientes';

  private asignarDatos(data: any): void {
    this.idUsuario = data.id;
    this.nombre = data.nombre;
    this.apellido = data.apellido;
    this.username = data.username;

    const rolBackend = (data.roles?.[0] || 'Usuario').toUpperCase() as RolTipo;
    this.rolRaw = rolBackend; // Guardamos el valor real del rol para condicionales
    this.rol = this.formatearRol(rolBackend);

    this.email = data.email;
    this.celular = data.celular;
    this.estado = data.enabled ? 'Activo' : 'Inactivo';
    this.fechaRegistro = new Date(data.fechaRegistro).toLocaleDateString('es-PE');

    this.asignarEstilosRol(rolBackend);
    const timestamp = new Date().getTime();
    this.perfil = `http://localhost:8080/uploads/perfiles/${data.perfil}?t=${timestamp}`;

    this.tituloHistorial =
      rolBackend === 'MUNICIPALIDAD' || rolBackend === 'ADMIN'
        ? 'Panel de gestión'
        : 'Historial de entregas recientes';
  }

  private asignarEstilosRol(rol: RolTipo): void {
    const roles: Record<RolTipo, [string, string]> = {
      CIUDADANO: ['#2e7d32', '#c8e6c9'],
      RECOLECTOR: ['#1565c0', '#bbdefb'],
      MUNICIPALIDAD: ['#f57c00', '#ffe0b2'],
      ADMIN: ['#b71c1c', '#ffcdd2'],
    };
    const [color, fondo] = roles[rol] || roles['CIUDADANO'];
    this.colorRol = color;
    this.fondoRol = fondo;
  }

  private formatearRol(rol: string): string {
    switch (rol.toUpperCase()) {
      case 'ADMIN': return 'Administrador';
      case 'CIUDADANO': return 'Ciudadano';
      case 'RECOLECTOR': return 'Recolector';
      case 'MUNICIPALIDAD': return 'Municipalidad';
      default: return 'Usuario';
    }
  }

  private obtenerMiRanking(): void {
    this.perfilService.getMiRanking().subscribe({
      next: (data) => {
        this.posicion = data.posicion;
        this.totalUsuarios = data.totalUsuarios;
        this.puntos = data.puntos;
        this.progreso = Math.max(10, 100 - ((this.posicion - 1) / this.totalUsuarios) * 100);
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error al obtener ranking:', err),
    });
  }

  editarPerfil(): void {
    this.formData = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      celular: this.celular,
    };
    this.mostrarEditor = true;
  }

  guardarCambios(): void {
    this.perfilService.actualizarPerfil(this.idUsuario, this.formData).subscribe({
      next: () => {
        alert('Perfil actualizado correctamente');
        this.mostrarEditor = false;
        this.obtenerDatosServidor();
      },
      error: (err) => console.error('Error al actualizar perfil:', err),
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (!file) return;
    this.perfilService.subirFotoPerfil(this.idUsuario, file).subscribe({
      next: () => {
        alert('Foto de perfil actualizada');
        this.recargarFoto();
      },
      error: (err) => console.error('Error al subir foto:', err),
    });
  }

  restaurarFoto(): void {
    this.perfilService.restaurarFotoPerfil(this.idUsuario).subscribe({
      next: () => {
        alert('Foto de perfil restaurada');
        this.recargarFoto();
      },
      error: (err) => console.error('Error al restaurar foto:', err),
    });
  }

  private recargarFoto(): void {
    this.obtenerDatosServidor();
  }

  toggleOpcionesFoto(event: MouseEvent): void {
    event.stopPropagation();
    this.mostrarOpcionesFoto = !this.mostrarOpcionesFoto;
  }

  ocultarOpcionesFuera(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.perfil-avatar-container')) {
      this.mostrarOpcionesFoto = false;
      this.cdr.markForCheck();
    }
  }

  cerrarModal(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.mostrarEditor = false;
    }
  }

  cerrarSesion(): void {
    this.authService.logout();
    window.location.href = '/login';
  }

  private obtenerUltimasEntregas(): void {
    this.perfilService.getMisUltimasEntregas().subscribe({
      next: (data) => {
        this.ultimasEntregas = (data || []).map((entrega: any) => ({
          ...entrega,
          estado: this.formatearEstado(entrega.estado),
          origenEntrega: entrega.puntoVerdeNombre || entrega.campaniaNombre || 'Punto no especificado',
        }));
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error al obtener últimas entregas:', err),
    });
  }

  private formatearEstado(estado: string): string {
    if (!estado) return '';
    const formato = estado.toLowerCase();
    switch (formato) {
      case 'pendiente': return 'Pendiente';
      case 'aprobado': return 'Aprobado';
      case 'rechazado': return 'Rechazado';
      default: return estado;
    }
  }
}
