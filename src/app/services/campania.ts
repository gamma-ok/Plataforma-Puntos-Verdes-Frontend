import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({ 
  providedIn: 'root' 
})
export class CampaniaService {

  constructor(private http: HttpClient) { }

  listarActivas(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/api/campanias/listar/activas`);
  }
}
