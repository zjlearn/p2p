import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormModel: FormGroup;

  constructor() {
    this.loginFormModel = new FormGroup({
      'userName': new FormControl(),
      'password': new FormControl(),
      'verifyCode': new FormControl()
    });
  }

  ngOnInit() {
  }

  // 用户提交时，进行用户身份验证
  onSubmit() {
    console.log(this.loginFormModel.value);
  }
}

// 用户相关的信息类
export class User {
  public userName: string;
  public password: String;

  constructor(userName: string, password: String) {
    this.userName = userName;
    this.password = password;
  }
}
