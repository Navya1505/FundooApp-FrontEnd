import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetpasswordForm!:FormGroup;
  submitted=false;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.forgetpasswordForm = this.formbuilder.group({
      emailId: ['', Validators.required]
    })
  }
  get f() {
    return this.forgetpasswordForm.controls
  }
  onSubmit() {
    this.submitted = false;
    if (this.forgetpasswordForm.invalid) {
      return;
    }
    alert('Success! \n\n' + JSON.stringify(this.forgetpasswordForm.value, null, 4));
  }
}
