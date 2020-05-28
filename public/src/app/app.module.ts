import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NumberInputComponent } from "./number-input/numberinput.component"

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, NumberInputComponent],
  imports: [BrowserModule, AppRoutingModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
