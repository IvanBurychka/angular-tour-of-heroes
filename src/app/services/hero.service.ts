import { Injectable } from '@angular/core';
import { Hero } from '../heroes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

    private heroesUrl = 'api/heroes';

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl);
    }

    // getHero(id: number): Observable<Hero> {
    //     this.messageService.add(`HeroService: fetched hero id=${id}`);
    //     return this.http.get<Hero>(this.heroesUrl).find()
    // }

    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }
}
