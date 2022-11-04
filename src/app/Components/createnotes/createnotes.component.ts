import { Component,EventEmitter, OnInit,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  show =false;
  createNote!: FormGroup;
  panelOpenState = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private note: NoteserviceService) { }

  ngOnInit(): void {
    this.createNote = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  isShow(){
    this.show=true;
  }
  onSubmit() {
    this.submitted = true;
    if (this.createNote.valid) {
      console.log("valid Data",this.createNote.value);
      console.log("do Api call");
      let data = {
        title: this.createNote.value.title,
        description: this.createNote.value.description,
      }
      this.note.CreateNotes(data).subscribe((Response:any)=>{
        console.log(Response);
        this.messageEvent.emit(Response)
      });
    }
    this.createNote.reset();
  }
 
}