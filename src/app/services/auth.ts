import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { jwtDecode } from 'jwt-decode'; // Import correcto para Angular 17+

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${baseUrl}/api/auth`;

  constructor(private http: HttpClient) { }

  // Login: obtiene el token JWT
  login(credentials: { username: string; password: string }): Observable<any> {
    // limpiar tokens antiguos antes de loguear
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Obtener datos del usuario actual
  getCurrentUser(): Observable<any> {
    return this.http.get(`${baseUrl}/api/usuarios/perfil/mi`);
  }

  // Guardar token en localStorage
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Obtener token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Guardar usuario en localStorage
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Obtener usuario del localStorage
  getUser() {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  // Obtener rol del usuario
  getUserRole(): string | null {
    const user = this.getUser();
    if (!user || !user.roles || user.roles.length === 0) return null;

    const role = typeof user.roles[0] === 'string'
      ? user.roles[0]
      : user.roles[0].nombre;

    return role;
  }

  // Cerrar sesión
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Verificar si hay sesión activa y si el token no expiró
  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const decoded: any = jwtDecode(token);
      const exp = decoded.exp * 1000; // segundos → milisegundos

      if (Date.now() >= exp) {
        this.logout(); // token expirado -> cerrar sesión
        return false;
      }

      return true;
    } catch (error) {
      this.logout(); // token inválido o dañado
      return false;
    }
  }
}
