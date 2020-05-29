import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent implements OnInit {
  @Input() valueControl = new FormControl('SPY');
 
  constructor() {}

  ngOnInit() {
    this.valueControl.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log("Value: ", value);
    });
  }

  searchStocks() {
    const currentValue = this.valueControl.value;
    console.log("Log Value:", currentValue)
  }

}
