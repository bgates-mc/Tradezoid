import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  passwordControl = new FormControl("");
  usernameControl = new FormControl("");

  constructor(public service: LoginService) {}

  ngOnInit() {}

  login() {
    const username = this.usernameControl.value;
    const password = this.passwordControl.value;
    this.service.login(username, password);
  }
}
