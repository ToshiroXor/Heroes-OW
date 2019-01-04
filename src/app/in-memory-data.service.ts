import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes = [
      { id: 11, name: 'Hanzo' },
      { id: 12, name: 'D.Va' },
      { id: 13, name: 'Junkrat' },
      { id: 14, name: 'Ana' },
      { id: 15, name: 'Mei' },
      { id: 16, name: 'Zarya' },
      { id: 17, name: 'Ashe' },
      { id: 18, name: 'Soldier 76' },
      { id: 19, name: 'Roadhog' },
      { id: 20, name: 'Zenyatta' },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+1 : 11;
  }

}
