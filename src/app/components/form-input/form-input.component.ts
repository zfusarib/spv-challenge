import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'spv-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {

  @Input() formGroup: FormGroup; // Formgroup al que pertenece el input.
  @Input() controlName : string; // ControlName que queremos que tenga el input.
  @Input() label : string; // Label que llevara el input.
  @Input() maxNumbers : number; // Máxima cantidad de caracteres que acepta el input.
  @Input() minNumbers : number; // Minima cantidad de caracteres que acepta el input.
  @Input() typeInput : string; // El tipo de input que queremos, puede ser password/number/text/etc.
  @Input() errorTextCustom : string; // Mensaje personalizado para el error de RegEx inválido.

  showPassword = false;

  constructor() {}

  changeShowPassword(){
    this.showPassword = !this.showPassword;
    const input = document.getElementById(this.controlName);
    const type = input?.getAttribute("type") === "password" ? "text" : "password";
    input?.setAttribute("type", type);
  }

}