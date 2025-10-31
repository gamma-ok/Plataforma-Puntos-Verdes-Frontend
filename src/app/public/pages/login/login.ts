import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private snack: MatSnackBar
  ) { }

  onLogin() {
    if (!this.username || !this.password) {
      this.snack.open('Por favor complete los campos', 'Cerrar', { duration: 3000 });
      return;
    }

    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        // Guardamos token antes de cualquier otra llamada
        this.authService.saveToken(response.token);

        // Llamadas en paralelo (para asegurar flujo correcto)
        forkJoin({
          user: this.authService.getCurrentUser()
        }).subscribe({
          next: ({ user }) => {
            this.authService.setUser(user);
            console.log('Usuario logueado:', user);

            const role = this.authService.getUserRole();
            console.log('Rol detectado:', role);

            // Pequeño delay para asegurar propagación del token
            setTimeout(() => {
              if (role === 'ADMIN')
                this.router.navigate(['/admin/inicio']);
              else if (role === 'MUNICIPALIDAD')
                this.router.navigate(['/municipalidad/inicio']);
              else if (role === 'RECOLECTOR')
                this.router.navigate(['/recolector/inicio']);
              else if (role === 'CIUDADANO')
                this.router.navigate(['/ciudadano/inicio']);
              else this.router.navigate(['/']);
            }, 200); // <- este delay ayuda a evitar la carga vacía en el navbar
          },
          error: (err) => {
            console.error(err);
            this.snack.open('Error al obtener datos del usuario', 'Cerrar', { duration: 3000 });
          }
        });
      },
      error: () => {
        this.snack.open('Usuario o contraseña incorrectos', 'Cerrar', { duration: 3000 });
      }
    });
  }

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
