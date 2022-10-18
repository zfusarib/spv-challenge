import { Component, Input } from '@angular/core';

@Component({
    selector: 'spv-custom-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class CustomButtonComponent {
    @Input() primary : boolean; // Definir el tipo/estilos de boton que queremos.
    @Input() text : string; // Definir el texto que va dentro del boton.
}
