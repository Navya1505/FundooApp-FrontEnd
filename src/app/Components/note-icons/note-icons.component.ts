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
  onArchieve(){
    let data ={ 
      noteID:[this.noteCard.noteID]

    }
    console.log(data);
    this.note.archieveNotes(data).subscribe((Response: any) => {
      console.log(Response);
    })

  }
  
}