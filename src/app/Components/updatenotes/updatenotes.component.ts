import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { title } from 'process';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
//  @Input() public data: any;
title: any;
description: any;
NoteId: any;


  constructor(private notes: NoteserviceService,public dialogRef: MatDialogRef<UpdatenotesComponent>,
    @Inject(MAT_DIALOG_DATA) public modeldata: any,) {
    
   }

  ngOnInit(): void {
    console.log(this.modeldata);
    this.title = this.modeldata.title;
    this.description = this.modeldata.description;
    this.NoteId=this.modeldata.noteId;

    
}
onNoClick(): void {
    
  let updateNote ={
      title: this.title,
    Description: this.description,
};
  this.notes. UpdateNotes(updateNote,this.NoteId).subscribe((Response: any) => {
    console.log(Response);
  });
  this.dialogRef.close();
}
}

