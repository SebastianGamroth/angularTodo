import { Component, OnInit } from '@angular/core';
import { InputArrayService } from '../input-array.service';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  title: string;
  note: string;
  toJson: any;

  constructor(public service: InputArrayService) { }

  ngOnInit(): void {
  }


  addPost() {
    this.toJson = {
      'title': this.title,
      'note': this.note
    };

    this.service.allNote[0].push(this.toJson);

    this.title = '';
    this.note = '';
  }


  toTrash(i: number) {

    this.service.allNote[1].push(this.service.allNote[0][i]);
    this.service.allNote[0].splice(i, 1);

  }


  toArchiv(i: number) {

    this.service.allNote[2].push(this.service.allNote[0][i]);
    this.service.allNote[0].splice(i, 1);

  }
}
