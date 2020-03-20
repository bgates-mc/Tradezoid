import { Component, OnInit } from '@angular/core';
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    function incrementValue() {
      let value = parseInt(document.getElementById('stockQuantity').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('stockQuantity').value = value;
    }

  }

}
