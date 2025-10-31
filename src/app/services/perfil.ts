import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  /** Obtener perfil actual */
  getPerfil(): Observable<any> {
    return this.http.get(`${baseUrl}/api/usuarios/perfil/mi`);
  }

  /** Actualizar datos del perfil */
  actualizarPerfil(id: number, perfilData: any): Observable<any> {
    return this.http.put(`${baseUrl}/api/usuarios/actualizar/${id}`, perfilData);
  }

  /** Subir foto de perfil */
  subirFotoPerfil(id: number, archivo: File): Observable<any> {
    const formData = new FormData();
    formData.append('imagen', archivo);
    return this.http.post(`${baseUrl}/api/usuarios/${id}/perfil`, formData);
  }

  /** Restaurar foto a default.png */
  restaurarFotoPerfil(id: number): Observable<any> {
    return this.http.put(`${baseUrl}/api/usuarios/actualizar/${id}`, { perfil: 'default.png' });
  }

  /** Obtener mi N°# en el ranking */
  getMiRanking(): Observable<any> {
    return this.http.get(`${baseUrl}/api/usuarios/ranking/mi`);
  }

  /** Obtener las últimas entregas del usuario autenticado */
  getMisUltimasEntregas(): Observable<any> {
    return this.http.get(`${baseUrl}/api/entregas/mis-ultimas`);
  }
}
