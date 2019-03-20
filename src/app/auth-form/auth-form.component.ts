import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass']
})
export class AuthFormComponent implements OnInit {

  @Input() submitted;

  success: any;
  failure: any;
  email: string;
  password: string;
  formHeaderText: string;

  constructor() { }

  ngOnInit() {
    this.formHeaderText = 'Login';
  }

  onSubmit(formValue) {
    console.log(formValue)
  }

}
