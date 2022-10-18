import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  regExpDoc = /^[0-9]*$/;
  regExpUser= /^[A-Za-z0-9]*$/;
  regExpPass=/(?=.*[A-Z])(?=.*\d)/;

  formLogin = new FormGroup({
    documento: new FormControl('',[ Validators.required, Validators.maxLength(8), Validators.minLength(8), Validators.pattern(this.regExpDoc)]),
    usuario: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.pattern(this.regExpUser)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.regExpPass)])
  });

  get disableBtn (){
    return this.formLogin.valid;
  }
  
  submitForm(){
    if(this.formLogin.valid){
      Swal.fire({
        title: 'Bienvenido/a',
        icon: 'success',
        confirmButtonColor: '#B10F36'
      });
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Por favor verifique todos los campos',
        icon: 'error',
        confirmButtonColor: '#B10F36'
      });
    };
  }

  forgotData(){
    Swal.fire({
      title: 'Si olvidaste tus datos comunicate con:',
      text: 'atclientes@spv.com',
      icon: 'warning',
      confirmButtonColor: '#B10F36'
    });
  }
}
