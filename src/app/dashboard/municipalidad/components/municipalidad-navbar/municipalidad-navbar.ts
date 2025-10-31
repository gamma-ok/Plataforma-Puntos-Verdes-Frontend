import { Component, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilService } from '../../../../services/perfil';
import { Router } from '@angular/router';

@Component({
  selector: 'app-municipalidad-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './municipalidad-navbar.html',
  styleUrl: './municipalidad-navbar.css'
})
export class MunicipalidadNavbar implements OnInit {
  @Output() sidebarToggle = new EventEmitter<void>();

  nombre = '';
  apellido = '';
  rol = '';
  perfil = '/assets/img/default.png';
  mostrarOpciones = false;

  constructor(
    private perfilService: PerfilService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Mostrar datos locales
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.nombre = user.nombre;
      this.apellido = user.apellido;
      this.rol = this.formatearRol(user.roles?.[0] || 'CIUDADANO');
      this.perfil = `http://localhost:8080/uploads/perfiles/${user.perfil || 'default.png'}`;
    }

    // Actualizar con backend
    this.perfilService.getDatosNavbar().subscribe({
      next: (data) => {
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.rol = this.formatearRol(data.roles?.[0] || 'CIUDADANO');
        const timestamp = new Date().getTime();
        this.perfil = `http://localhost:8080/uploads/perfiles/${data.perfil}?t=${timestamp}`;
        localStorage.setItem('user', JSON.stringify(data));
      },
      error: (err) => console.warn('No se pudieron actualizar los datos del navbar:', err)
    });
  }

  // Función para convertir los roles a formato legible
  formatearRol(rol: string): string {
    const rolesMap: Record<string, string> = {
      'CIUDADANO': 'Ciudadano',
      'RECOLECTOR': 'Recolector',
      'MUNICIPALIDAD': 'Municipalidad',
      'ADMIN': 'Administrador'
    };
    return rolesMap[rol.toUpperCase()] || rol;
  }

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleOpcionesFoto(event: MouseEvent) {
    event.stopPropagation();
    this.mostrarOpciones = !this.mostrarOpciones;
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  verPerfil() {
    this.router.navigate(['/municipalidad/perfil']);
  }

  @HostListener('document:click', ['$event'])
  ocultarOpcionesFuera(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-avatar-container')) {
      this.mostrarOpciones = false;
    }
  }
}
