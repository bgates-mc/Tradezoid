import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username, password) {
    console.log('username, password: ', username, password);
    return this.http.get("google.com");
  }
}
