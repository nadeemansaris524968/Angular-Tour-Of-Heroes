import { MessageService } from './message.service';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes.');
    return of(HEROES);
  }

}
