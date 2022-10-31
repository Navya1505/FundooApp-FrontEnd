import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserserviceService) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      emailID: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.login.valid) {
      console.log("do api call");
      let data = {
        EmailID: this.login.value.emailID,
        Password: this.login.value.password
      }
      this.user.login(data).subscribe((Response: any) => {
        console.log('responce :=>', Response.data);
        localStorage.setItem('token', Response.data)
      })
    } else {
      console.log("Invalid data", this.login.value);
      console.log("no api call");
    }
  }
}