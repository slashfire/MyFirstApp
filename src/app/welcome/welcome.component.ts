import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome to our awessome App';
  name = 'Prabhakar';
  welcomeMessage: string = '';
  errorMessage = '';
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response), error=>this.handleError(error)
    );
  }
  getWelcomeMessageWithParameter(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfullResponse(response), error=>this.handleError(error)
    );
  }
  handleError(error){
    this.errorMessage = error;
  }
  handleSuccessfullResponse(response){
    console.log(response);
    this.welcomeMessage = response.message;
  }
}
