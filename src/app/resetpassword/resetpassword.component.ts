import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetPasswordForm=this.formBuilder.group({
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', [Validators.required, Validators.minLength(8)]],
    })
  }
  get f(){
    return this.resetPasswordForm.controls
  }
  onSubmit(){
    this.submitted=false;
    if(this.resetPasswordForm.invalid){
      return;
    }
    alert('Success \n\n' +JSON.stringify(this.resetPasswordForm.value,null,4));
  }
}