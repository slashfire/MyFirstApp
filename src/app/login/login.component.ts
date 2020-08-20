import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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
  constructor(private router: Router,
     private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.onValidation();
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
    this.router.navigate(['welcome', this.username]);
    console.log("Inside service call if");
    }
    console.log(this.username);
  }
  onValidation(){
    
  }
}
