import { Component } from '@angular/core';
import { UserService } from '../../../services/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    celular: '',
    email: ''
  };

  constructor(private userService: UserService, private snack: MatSnackBar) {}

  registrar() {
    if (!this.user.username || !this.user.password || !this.user.email) {
      this.snack.open('Complete los campos obligatorios', 'Cerrar', { duration: 3000 });
      return;
    }

    this.userService.registerUser(this.user).subscribe({
      next: () => {
        this.snack.open('Usuario registrado correctamente', 'Cerrar', { duration: 3000 });
      },
      error: () => {
        this.snack.open('Error al registrar el usuario', 'Cerrar', { duration: 3000 });
      }
    });
  }
}
