import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {DarkModeService} from "angular-dark-mode";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mettCalc';
  logo: any;



  // onToggleDark() {
  //   console.log("toggled")
  //   this.darkModeService.toggle();
  // }
}
