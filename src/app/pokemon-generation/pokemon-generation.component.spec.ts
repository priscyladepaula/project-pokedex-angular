import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGenerationComponent } from './pokemon-generation.component';

describe('PokemonGenerationComponent', () => {
  let component: PokemonGenerationComponent;
  let fixture: ComponentFixture<PokemonGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonGenerationComponent]
    });
    fixture = TestBed.createComponent(PokemonGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
