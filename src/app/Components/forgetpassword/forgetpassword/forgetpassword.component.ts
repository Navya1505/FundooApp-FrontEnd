import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service'

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  forgetPasswordForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserserviceService) { }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
      emailId: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = false;
    if (this.forgetPasswordForm.valid) {
      console.log("Do Api Call")
      let data = {
        emailId: this.forgetPasswordForm.value.emailId
      }
      this.user.forgetPassword(data).subscribe((Response: any) => {
        console.log(Response);
      })
    } else {
      console.log("No Api Call")
    }
  }
}

