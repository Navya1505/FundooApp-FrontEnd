import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';


@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  noteArray: any;
  constructor(private note: NoteserviceService) { }

  ngOnInit(): void {
    this.getarchieve()
  }
  getarchieve() {  
    this.note.GetNotes().subscribe(
      (response: any) => {
        this.noteArray = response.data;
        this.noteArray = this.noteArray.filter((a: any) => {
          return a.archieve === true;
        })
        console.log(this.noteArray);
      })
  }

}
