import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some welcome message!'
  name = ''

  // ActivatedRoute allows you to pass a parameter to route
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    console.log(this.message)
    this.name = this.route.snapshot.params['name'];
  }

}
