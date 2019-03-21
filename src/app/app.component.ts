import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pro-course-ajinkya';
  rememberMe: boolean = false;

  createUser(event) {
    console.log('Created user succesfully - ' + JSON.stringify(event));
  }
  
  loginUser(event) {
    console.log('Logged in user succesfully - ' + JSON.stringify(event) + ' ' + this.rememberMe);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
}
