import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {
  NgbAccordionBody,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NgbAccordionToggle
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionToggle,
    NgbAccordionHeader,
    NgbAccordionCollapse,
    NgbAccordionBody
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  logo: any;
  mettAmount = 0;
  peopleAmount = 0;
  broetchenPerPerson = 1.5;
  mettPerHalbesBroetchen = 50;
  broetchenAmount = 0;

  onSubmit(f: NgForm) {
    this.peopleAmount= +f.value.peopleAmount
    this.broetchenAmount = Math.round(+f.value.peopleAmount * this.broetchenPerPerson);
    this.mettAmount= this.broetchenAmount * this.mettPerHalbesBroetchen *2
    console.log(this.mettAmount);

  }
}
