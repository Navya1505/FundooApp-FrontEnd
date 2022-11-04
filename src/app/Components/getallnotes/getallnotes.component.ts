import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  getNotes: any;
  noteList: any;
constructor(private note:NoteserviceService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.GetNotes().subscribe((response: any) => {
      console.log(response.data);
      this.noteList = response.data;
    })
  }
  receiveMessage($event: any) {
    console.log($event);
    this.getAllNote();
  }
  updatedicon($event:any) {
    console.log($event);
    this.getAllNote();
  }
  receiveMessagearchive($event:any){
    console.log($event);
    this.getAllNote();
  }
  iconRefresh($event:any){
    console.log($event)
    this.getAllNote();
  }
}

