import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  errorMessage = 'invlaid credentials!'
  invalidLogin = false

  // Router is a dependency of the login component, inject it in as an argument to the constructor
  constructor(private router: Router,
    private hardcodedAuthService: HardcodedAuthService
    ) { 
  }

  ngOnInit(): void {
  }

  handleLogin(){

    if(this.hardcodedAuthService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
