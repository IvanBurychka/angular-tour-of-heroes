import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = clone(hero);
    }

    isEqualHeroes(hero: Hero, selectedHero: Hero): boolean {
        if (!hero || !selectedHero) {
            return false;
        }

        const aProps = Object.getOwnPropertyNames(hero);
        const bProps = Object.getOwnPropertyNames(selectedHero);

        if (aProps.length !== bProps.length) {
            return false;
        }

        for (let i = 0; i < aProps.length; i++) {
            const propName = aProps[i];

            if (hero[propName] !== selectedHero[propName]) {
                return false;
            }
        }

        return true;
    }

}

function clone(obj) {
    if (null == obj || 'object' !== typeof obj) { return obj; }
    const copy = obj.constructor();
    for (const attr in obj) {
        if (obj.hasOwnProperty(attr)) { copy[attr] = obj[attr]; }
    }
    return copy;
}


