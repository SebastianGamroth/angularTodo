import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputArrayService {

  // public allTitles: string[] = [];
  // public allNotes: string[] = [];

  // public trashTitles: string[] = [];
  // public trashNotes: string[] = [];

  public allNote: any[] = [[], []];

  constructor() { }
}
