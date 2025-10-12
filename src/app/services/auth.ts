import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${baseUrl}/api/auth`;

  constructor(private http: HttpClient) { }

  // 🔹 Login: obtiene el token JWT
  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // 🔹 Obtener datos del usuario actual
  getCurrentUser(): Observable<any> {
    return this.http.get(`${baseUrl}/api/usuarios/perfil/mi`);
  }

  // 🔹 Guardar token en localStorage
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // 🔹 Obtener token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // 🔹 Guardar usuario en localStorage
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // 🔹 Obtener usuario del localStorage
  getUser() {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  // 🔹 Obtener rol del usuario
  getUserRole(): string | null {
    const user = this.getUser();
    if (!user || !user.roles || user.roles.length === 0) return null;

    // Si el rol viene como string, simplemente lo devolvemos
    const role = typeof user.roles[0] === 'string'
      ? user.roles[0]
      : user.roles[0].nombre;

    return role;
  }


  // 🔹 Cerrar sesión
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // 🔹 Verificar si hay sesión activa
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
