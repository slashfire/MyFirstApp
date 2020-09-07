import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username = 'Prabhakar';
    let password = 'password';
    let modified;
    let response;
    let basicAuthHeaderString =  'Basic ' + window.btoa(username + ':' + password);
    request = request.clone({
      setHeaders : {
        Authorization: basicAuthHeaderString,
      }
    })
    modified = next.handle(request);
    response = modified.subscribe(); 
    
    return next.handle(request);
  }
}
