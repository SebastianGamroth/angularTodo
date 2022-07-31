import { NgForOf } from '@angular/common';
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

    this.service.allNote[0]['addNote'].push(this.toJson);
    console.log(this.service.allNote[0]);
    this.title = '';
    this.note = '';
  }


  toTrash(i: number) {
    // this.service.allNote[1].push(this.service.allNote[0][i]);
    // this.service.allNote[0].splice(i, 1);

    this.service.allNote[0].trash.push(this.service.allNote[0].addNote[i]);
    this.service.allNote[0].addNote.splice(i, 1);
    console.log(this.service.allNote[0]);

    // let trash = this.service.allNote.filter(t => t['trash'] == true);
    // trash.forEach(element => {
    //   console.log(trash)
    // });

  }


  toArchiv(i: number) {
    this.service.allNote[0].archiv.push(this.service.allNote[0].addNote[i]);
    this.service.allNote[0].addNote.splice(i, 1);
  }
}
