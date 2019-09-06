import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BookServiceService } from "./book-service.service";

@Component({
  selector: "app-main-window",
  templateUrl: "./main-window.component.html",
  styleUrls: ["./main-window.component.css"]
})
export class MainWindowComponent implements OnInit {
  constructor(private bookService: BookServiceService) {
    this.printResult();
  }
  responseData: any = [];
  single: any = [];

  ngOnInit() {}
  enteredText = new FormControl("");
  radioButtonSelected = new FormControl("");

  printEnteredData() {
    console.log(this.enteredText.value, this.radioButtonSelected.value);
  }

  printResult() {
    this.bookService.showBasicBooks().subscribe(data => {
      //Getting the Title of the Book.
      //console.log(data["items"][0]["volumeInfo"]["title"]);
      //Getting Array of Authors.
      // console.log(data["items"][0]["volumeInfo"]["authors"]);
      //Getting the Name of Publisher.
      // console.log(data["items"][0]["volumeInfo"]["publisher"]);
      //Getting the Published Date.
      // console.log(data["items"][0]["volumeInfo"]["publishedDate"]);
      //Getting the Description of Book!
      // console.log(data["items"][0]["volumeInfo"]["description"]);
      //Getting the Thumbnail Image of the Book!
      // console.log(data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]);
      console.log(data["items"][0]["volumeInfo"]["previewLink"]);

      this.responseData = data["items"];
    });
  }

  getSearchResult() {
    if (
      this.enteredText.value != "" &&
      this.radioButtonSelected.value == "Author"
    ) {
      this.bookService
        .findBooksbyAuthor(this.enteredText.value)
        .subscribe(data => {
          this.responseData = data["items"];
          console.log(this.responseData);
        });
    }

    if (
      this.enteredText.value != "" &&
      this.radioButtonSelected.value == "Title"
    ) {
      this.bookService
        .findBooksByTitle(this.enteredText.value)
        .subscribe(data => {
          this.responseData = data["items"];
          console.log(this.responseData);
        });
    }
  }
}
