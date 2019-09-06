import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-main-window",
  templateUrl: "./main-window.component.html",
  styleUrls: ["./main-window.component.css"]
})
export class MainWindowComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  enteredText = new FormControl("");
  radioButtonSelected = new FormControl("");

  printEnteredData() {
    console.log(this.enteredText.value, this.radioButtonSelected.value);
  }
}
