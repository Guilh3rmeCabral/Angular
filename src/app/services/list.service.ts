import { Animal } from './../Animal';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(
    private http: HttpClient
  ) { }

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`); //Aqui acontece a exclusão de fato do animal
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
