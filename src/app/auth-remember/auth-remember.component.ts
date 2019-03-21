import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.sass']
})
export class AuthRememberComponent implements OnInit {

  @Output() checkedValue: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onChecked(value: boolean) {
    this.checkedValue.emit(value);
  }

}
