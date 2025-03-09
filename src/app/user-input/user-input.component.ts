import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialIvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  onSubmit() {
    console.log('Onsubmit clicked!!');
    console.log('enteredAnnualInvestment ' + this.enteredAnnualInvestment);
    console.log('enteredAnnualInvestment ' + this.enteredAnnualInvestment);
    console.log('enteredExpectedReturn ' + this.enteredExpectedReturn);
    console.log('enteredDuration ' + this.enteredDuration);
  }
}
