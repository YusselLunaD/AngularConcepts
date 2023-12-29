import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameListService {

  private names = ['Alice','Bob','Charls','David'];

  getNames(): string[]{
    return this.names;
  }
}
