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
    console.log('Create user %s', event);
  }

  loginUser(event) {
    console.log(`Create user ${event} ${this.rememberMe}`);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
}
