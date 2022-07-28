import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputArrayService {

  public allNote: any[] = [[], [], []];

  constructor() { }
}
