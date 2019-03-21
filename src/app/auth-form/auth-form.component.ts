import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass']
})
export class AuthFormComponent implements OnInit {

  @Output() submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  email: string;
  password: string;
  formHeaderText: string;

  constructor() { }

  ngOnInit() {
    this.formHeaderText = 'Login';
  }

  onSubmit(formValue) {
    this.submitted.emit(formValue);
  }

}
