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
  colorarray =[{Colorcode:"rgb(153, 0, 51)"},
  {Colorcode:"rgb(102, 255, 102)"},
  {Colorcode:"rgb(51, 102, 204)"},
  {Colorcode:"rgb(0, 255, 255)"},{Colorcode:"rgb(255, 0, 255)"},
  {Colorcode:"rgb(255, 51, 0)"},{Colorcode:"rgb(0, 51, 0)"},
  {Colorcode:"rgb(255, 255, 0)"},{Colorcode:"rgb(255, 140, 26)"},
  {Colorcode:"rgb(102, 204, 255)"},
  {Colorcode:"rgb(38,30,238)"},
  {Colorcode:"rgb(51, 153, 102)"}];
  colorId: any;
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
    setColor(color: any) {
      this.colorId = this.noteCard.color=color;
      let Data = {
        color: color,
        noteID: [this.noteCard.noteID]
      };
       
      this.note.change_note_color(Data).subscribe((response: any) => {
        console.log(response);
        this.changeNoteEvent.emit(response);
  
        console.log(Data)
  
      })
  
    }
  }
