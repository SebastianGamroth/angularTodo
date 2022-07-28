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

    this.service.allNote[2].push(this.service.allNote[1][i]);
    this.service.allNote[1].splice(i, 1);

  }


  deleteNote(i: number) {

    this.service.allNote[1].splice(i, 1);

  }

}
