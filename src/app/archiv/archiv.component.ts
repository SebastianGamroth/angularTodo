import { Component, OnInit } from '@angular/core';
import { InputArrayService } from '../input-array.service';

@Component({
  selector: 'app-archiv',
  templateUrl: './archiv.component.html',
  styleUrls: ['./archiv.component.scss']
})
export class ArchivComponent implements OnInit {

  constructor(public service: InputArrayService) { }

  ngOnInit(): void {
  }

  deleteNote(i: number) {

    this.service.allNote[0].archiv.splice(i, 1);

  }

}
