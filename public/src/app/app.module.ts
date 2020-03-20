import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
<<<<<<< Updated upstream
=======
import { ExampleComponent } from "./example/example.component";
import { LoginComponent } from "./login/login.component";
import { numberinputComponent } from "./number-input/numberinput.component";
>>>>>>> Stashed changes

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
