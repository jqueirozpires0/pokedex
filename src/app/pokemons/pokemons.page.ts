import axios from 'axios';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonItemSliding, IonIcon, IonItemOption, IonItemOptions } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonItem, IonList, IonItemSliding, IonIcon, IonItemOption, IonItemOptions]
})
export class PokemonsPage {

  listaPokemon = new Array();

  constructor() { }

  ionViewWillEnter() {
    this.listaPokemons();
  }

  async listaPokemons() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
      this.listaPokemon = [response.data.results, ];
    } catch (error) {
      console.error(error);
    }
  }

}
