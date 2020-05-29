import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Tradezoid";

  numberOfShares = new FormControl(0);

  ngOnInit() {
    this.numberOfShares.valueChanges.pipe(debounceTime(500), map(value => value * 10)).subscribe(shares => {
      console.log("SHARES: ", shares);
    });
  }
}
