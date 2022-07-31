import { Component, OnInit } from '@angular/core';
import { InputArrayService } from '../input-array.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(public service: InputArrayService) { }

  ngOnInit(): void {
  }


  toArchiv(i: number) {

    this.service.allNote[0].archiv.push(this.service.allNote[0].trash[i]);
    this.service.allNote[0].trash.splice(i, 1);

  }


  deleteNote(i: number) {

    this.service.allNote[0].trash.splice(i, 1);

  }

}
