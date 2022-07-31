import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputArrayService {

  // public allNote: any[] = [[], [], []];

  public allNote: any[] = [
    {
      'addNote': [],
      'archiv': [],
      'trash': []
    }
  ];

  constructor() { }
}
