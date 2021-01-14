import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length: number = 0
  password: string = ''
  useLetters: boolean = false
  useNumbers: boolean = false
  useSymbols: boolean = false

  onChangeLength(value: string): void {
    const parsedValue = parseInt(value, 10)

    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }

  onChangeUseLetters(): void {
    this.useLetters = !this.useLetters
  }

  onChangeUseNumbers(): void {
    this.useNumbers = !this.useNumbers
  }

  onChangeUseSymbols(): void {
    this.useSymbols = !this.useSymbols
  }

  onButtonClick(): void {
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()_+=-/[]~'

    let allowedChars = ''

    if (this.useLetters) {
      allowedChars += letters
    }

    if (this.useNumbers) {
      allowedChars += numbers
    }

    if (this.useSymbols) {
      allowedChars += symbols
    }

    let generatedPassword = ''

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * allowedChars.length)
      generatedPassword += allowedChars[index]
    }

    this.password = generatedPassword
  }
}
