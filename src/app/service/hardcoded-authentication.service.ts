import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate( username, password) {
    // console.log('before ' + this.isUserLoggedIn());
    if(username==='Prabhakar' && password === 'dummy'){
      sessionStorage.setItem('authenticationUser',username);
      // console.log('after ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }
  
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticationUser');
    // console.log("Called session storage"+ user);
    return !(user === null);
  }
}
