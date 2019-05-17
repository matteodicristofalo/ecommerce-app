import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: FormGroup;
  resObj;
  error: string;

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) { }

  ngOnInit() {
    this.data = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.service.login(this.data.value).subscribe(
      res => {
        this.resObj = res;
        localStorage.setItem('user', this.data.value.email);
        localStorage.setItem('token', this.resObj.token);
        this.service.changeUser(this.data.value.email);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.error = err.error.message;
      }
    );
  }

}
