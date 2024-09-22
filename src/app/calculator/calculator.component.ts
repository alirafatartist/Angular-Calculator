import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  defaultTheme: string = 'dark_mode';
  input: string = '';
  inputPlacholder: string = '';
  result: string = '0';
  changeTheme() {
    setTimeout(() => {
      this.defaultTheme =
        this.defaultTheme === 'dark_mode' ? 'light_mode' : 'dark_mode';
    }, 170);
  }
  appindtodisplay(n: string) {
    this.input += n;
  }
  replaceOperations(): string {
    return this.input.replaceAll('÷', '/').replaceAll('×', '*');
  }
  equal() {
    if (this.input == '') {
      this.result = '0';
    } else {
      try {
        this.result = evaluate(this.replaceOperations());
      } catch (error) {
        this.clearInput();
        this.result = 'Error';
      }
    }
  }
  clearInput() {
    this.input = '';
    this.result = '0';
  }
  removeCharacter() {
    this.input = this.input.substring(0, this.input.length - 1);
  }
}
