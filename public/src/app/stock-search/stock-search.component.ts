import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import {MatIconModule} from '@angular/material/icon'; 

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent implements OnInit {
  @Input() valueControl;
 
  constructor() {}

  ngOnInit() {
    this.valueControl.valueChanges.subscribe(value => {
      console.log("Value: ", value);
    });
  }

  searchStocks() {
    const currentValue = this.valueControl.value;
    console.log("Value:", currentValue)
  }

}
