import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class BookServiceService {
  constructor(private httpRequest: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      Accept: "application/json",
      API_KEY: "AIzaSyDImxwGN2C2ATO8dl-oEG2aKm00pvDDups"
    })
  };

  public showBasicBooks() {
    return this.httpRequest.get(
      "https://www.googleapis.com/books/v1/volumes?q=search+terms",
      this.httpHeader
    );
  }
}
