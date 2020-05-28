import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'numberinput',
  templateUrl: './numberinput.component.html',
  styleUrls: ['./numberinput.component.scss']
})
export class NumberInputComponent implements OnInit {
  value = 0;
 
  constructor() {}

  ngOnInit() {}

  incrementValue() {
    this.value++;
  }

}