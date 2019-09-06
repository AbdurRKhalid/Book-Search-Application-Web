import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { MainWindowComponent } from "./main-window/main-window.component";

import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, MainWindowComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
