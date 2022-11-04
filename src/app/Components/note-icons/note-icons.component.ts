import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {
  @Input() noteCard: any;
  @Output() changeNoteEvent = new EventEmitter<string>();
  @Output() displayicons = new EventEmitter<string>();
  noteID: any;
  isArchieve:boolean=false;

  constructor(private note:NoteserviceService) { }

  ngOnInit(): void {
    console.log(this.noteCard);
  }
  Archieve(){
    this.note. Archieve(this.noteCard.noteID).subscribe((Response: any) => {
      console.log(Response);
      window.location.reload();
     })

  }
  isTrash() {
    this.note.delete(this.noteCard.noteID).subscribe((response: any) => {
      console.log(response);
      window.location.reload();

    })
  }

  UnArchievenote() {
    this.note.Archieve(this.noteCard.noteID).subscribe((response: any) => {
      console.log("note unarchieve",response);
      window.location.reload();
  
    })
  }
    Restore() {
this.note.delete(this.noteCard.noteID).subscribe((response: any) => {
        console.log("note restore",response);
        window.location.reload();
  
      })
    }
  
  
  }
