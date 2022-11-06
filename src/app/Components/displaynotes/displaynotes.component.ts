import { Component,EventEmitter,Output, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
 @Input () getnotes:any;
 @Output() changeNoteEvent = new EventEmitter<string>();
 @Output() updatedisplay = new EventEmitter<string>();
 @Output() messageEvent= new EventEmitter<string>();

  constructor(private dialog:MatDialog) { }
  ngOnInit() {
console.log(this.getnotes);
}
openDialog(noteArray: any): void {
  const dialogRef = this.dialog.open(UpdatenotesComponent, {
    width: '400px',
    height: '150px',
    data: {title: noteArray.title, description: noteArray.description,noteId: noteArray.noteID},
  });
  dialogRef.afterClosed().subscribe((result:any) => {
    console.log('The dialog was closed');
    this.updatedisplay.emit(result);
  });
}
recieveArchiveNote(event: any) {
  this.changeNoteEvent.emit(event);
}
iconRefresh($event: any) {
  console.log($event);
  this.changeNoteEvent.emit($event)
}
}
