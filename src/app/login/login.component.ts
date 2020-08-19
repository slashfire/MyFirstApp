import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Prabhakar';
  password = '';
  errorMessage = "Invalid Credentials";
  inValidLogin = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.onValidation();
    this.router.navigate(['welcome', this.username]);
    console.log(this.username);
  }
  onValidation(){
    if(this.username==='login' && this.password === 'dummy'){
      this.inValidLogin = true;
    } else {
      this.inValidLogin = false;
    }
  }
}
