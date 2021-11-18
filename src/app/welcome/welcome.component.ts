import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some welcome message!'
  welcomeMessageFromService!:string
  name = ''

  // ActivatedRoute allows you to pass a parameter to route
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { 

  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    // subscribe() actually executes the request
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message;
  }

}
