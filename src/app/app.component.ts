import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  final: string;
  test = new FormGroup({
    input: new FormControl("")
  });

  myEnterFunction() {
    this.final = this.test.get("input").value;
    console.log(this.final);
  }
}
