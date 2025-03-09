import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import type { investmentInput } from '../investment-inputs.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<investmentInput>();
  enteredInitialIvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialIvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    });

    // Reseting the form
    this.enteredInitialIvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
