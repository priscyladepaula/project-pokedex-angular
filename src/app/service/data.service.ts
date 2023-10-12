import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, catchError, map, retry, throwError } from 'rxjs';
import { Pokemon } from '../interface/pokemon';
import { Generation } from '../interface/generation';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  url = 'https://pokeapi.co/api/v2';
  pokemons: any[] = [];

  constructor(private http: HttpClient) { }

  getGenPokemons(num: number): Observable<Generation[]>{
    return this.http.get<Generation[]>(`${this.url}/generation/${num}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getAllGenerations(){
    return this.http.get(`${this.url}/generation/`);
  }

  getMoreData(name: string){
    return this.http.get(`${this.url}/pokemon/${name}`)
  }

  getPokemonById(id: number){
    return this.http.get(`${this.url}/pokemon/${id}`)
  }

  getPokemonByName(name: string){
    return this.http.get(`${this.url}/pokemon/${name}`)
  }

  getSpecies(name: string){
    return this.http.get(`${this.url}/pokemon-species/${name}`)
  }

  getSpeciesWithoutName(){
    return this.http.get(`${this.url}/pokemon-species/`)
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
