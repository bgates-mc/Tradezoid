import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NumberInputComponent } from "./number-input/numberinput.component"

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; 

@NgModule({
  declarations: [AppComponent, NumberInputComponent, StockSearchComponent],
  imports: [BrowserModule, AppRoutingModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
