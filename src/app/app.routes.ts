import { Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'favoritos',
        loadComponent: () => import('./favoritos/favoritos.page').then(m => m.FavoritosPage)
      },
      {
        path: 'pokemons',
        loadComponent: () => import('./pokemons/pokemons.page').then(m => m.PokemonsPage)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pokemons',
    pathMatch: 'full',
  },
];
