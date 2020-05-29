import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'numberinput',
  templateUrl: './numberinput.component.html',
  styleUrls: ['./numberinput.component.scss']
})
export class NumberInputComponent implements OnInit {
  @Input() valueControl;
 
  constructor() {}

  ngOnInit() {
    this.valueControl.valueChanges.subscribe(value => {
      console.log("Value: ", value);
    });
  }

  incrementValue() {
    const currentValue = this.valueControl.value;
    this.valueControl.patchValue(currentValue + 1);
  }

}