import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';
import { PokemonGenerationComponent } from '../pokemon-generation/pokemon-generation.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  listPokemons: any = [];
  recebeGeracao: any;

  private subscription!: Subscription;

  constructor(public dataService: DataService, private route: Router) { }

  ngOnInit(): void {
    this.subscription = this.dataService._data.subscribe((data) => {
      this.getPokemonGeneration(data);
    })
  }

  leadingZero(str: string | number, size = 4): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }

  getTypeColor(type: string) {
    switch(type){
      case 'bug':
        return '#949e21';
      case 'dragon':
        return '#4c5be5';
      case 'fairy':
        return '#f868f8';
      case 'fire':
        return '#e82826';
      case 'ghost':
        return '#753e6e';
      case 'ground':
        return '#8e5228';
      case 'normal':
        return '#9ca4b0';
      case 'psychic':
        return '#f13f77';
      case 'steel':
        return '#61a1b7';
      case 'dark':
        return '#4e423e';
      case 'electric':
        return '#f5bd0f';
      case 'fighting':
        return '#ff7f01';
      case 'flying':
        return '#81b8ef';
      case 'grass':
        return '#409e2d';
      case 'ice':
        return '#3cd6ff';
      case 'poison':
        return '#9243cf';
      case 'rock':
        return '#b8ab7f';
      case 'water':
        return '#297cee';
    }
    return '#222224';
  }

  getPokemonGeneration(numGen: number){
    this.dataService.getGenPokemons(numGen).subscribe((data: any) => {
      data.pokemon_species.forEach((result: { name: string }) => {
        this.dataService.getSpecies(result.name).subscribe((response: any) => {
          this.dataService.getPokemonById(response.id).subscribe((uniqResponse: any) => {
            this.listPokemons.push(uniqResponse);
            this.listPokemons.sort((a: any, b: any) => a.id - b.id);
          })
        })
      })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  voltar() {
    this.route.navigate(['/generation']);
  }
}
