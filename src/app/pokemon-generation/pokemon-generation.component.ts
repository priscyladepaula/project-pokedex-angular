import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-generation',
  templateUrl: './pokemon-generation.component.html',
  styleUrls: ['./pokemon-generation.component.css']
})
export class PokemonGenerationComponent implements OnInit {

  listGenerations: any = [];

  constructor(public dataService: DataService) { }

  convertido: number = 0;

  ngOnInit(): void {
    this.getGenerations();
  }

  getGenerations() {
    this.dataService.getAllGenerations().subscribe((data: any) => {
      data.results.forEach((result: { name: string }) => {
        this.listGenerations.push(result);
      })
    })
  }

  romanToInt(name: string) {
    let word = name.split('-');
    word[1] = word[1].toUpperCase();
    const romano = word[1];
    this.convertido = this.convertRomanToInt(romano);
    console.log(this.convertido);
  }

  convertRomanToInt(s: string): number {
    const map = new Map([
      ['I', 1],
      ['IV', 4],
      ['V', 5],
      ['IX', 9],
      ['X', 10],
      ['XL', 40],
      ['L', 50],
      ['XC', 90],
      ['C', 100],
      ['CD', 400],
      ['D', 500],
      ['CM', 900],
      ['M', 1000]
    ]);
    let result = 0;

    for (let i = 0; i < s.length; i++) {
      const twoSymbols = map.get(s[i] + s[i + 1]);
      const oneSymbol = map.get(s[i]);
      if (twoSymbols) {
        i += 1; // skip iteration of next symbol
      }
      result += twoSymbols || oneSymbol || 0;
    }

    return result;

  }

  getElementId(ref: any){
    let element = ref;
    
    let elementId = element.id;
    this.romanToInt(elementId);
  }



}
