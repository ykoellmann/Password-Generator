import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password: string = '';
  passwordLength: number = 0;
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  onLengthInput(event: Event): void {
    console.log(event);
    length = parseInt((event.target as HTMLInputElement).value);

    if (!isNaN(length))
    {
      this.passwordLength = length;
    }
  }

  onUseLettersClicked(): void {
    this.useLetters = !this.useLetters;
  }

  onUseNumbersClicked(): void {
    this.useNumbers = !this.useNumbers;
  }

  onUseSymbolsClicked(): void {
    this.useSymbols = !this.useSymbols;
  }

  onGeneratePasswordClicked(): void {

  }
}
