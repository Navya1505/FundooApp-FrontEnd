import { Component,Input, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {
  @Input() noteCard: any;
  noteID: any;
  isArchieve:boolean=false;

  constructor(private note:NoteserviceService) { }

  ngOnInit(): void {
  }
  Archieve(){
    this.note. Archieve(this.noteCard.noteID).subscribe((Response: any) => {
      console.log(Response);
     })

  }
  isTrash() {
    this.note.delete(this.noteCard.noteID).subscribe((response: any) => {
      console.log(response);

    })
  }

  UnArchievenote() {
    this.note.Archieve(this.noteCard.noteID).subscribe((response: any) => {
      console.log("note unarchieve",response);
  
    })
  }
    Restore() {
this.note.delete(this.noteCard.noteID).subscribe((response: any) => {
        console.log("note restore",response);
  
      })
    }
  
  
  }
