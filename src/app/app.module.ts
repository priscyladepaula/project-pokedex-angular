import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonGenerationComponent } from './pokemon-generation/pokemon-generation.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  // { path: '', component: PokemonGenerationComponent },
  { path: 'generation', component: PokemonGenerationComponent },
  { path: 'pokemon', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonListComponent },
  { path: '', redirectTo: 'generation', pathMatch: 'full' },
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonGenerationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
