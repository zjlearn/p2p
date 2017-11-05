import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formModel: FormGroup;

  constructor() {
    this.formModel = new FormGroup({
      'userName': new FormControl(),
      'mobile': new FormControl(),
      'passwordsGroup': new FormGroup({
        'password': new FormControl(),
        'pconfirm': new FormControl()
      })
    });
  }

  onSubmit() {
    console.log(this.formModel.value);
  }


  ngOnInit() {
  }

}
