import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  number1: number = 0 
  number2: number = 0
  result: number  = 0
  isDisabled = false
  borrowerName = ""
    
  getAdd() {
    this.result  = this.number1 + this.number2
    return this.result
  }
  
  getSubstract() {
    this.result  = this.number1 - this.number2
    return this.result
  }

  getMultiply() {
    this.result  = this.number1 * this.number2
    return this.result
  }

  sendData() {
    alert("Resultado Ejecutado !!!")
   }  

}
