import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(){
    return this.miFormulario?.controls['nombre']?.touched &&
           this.miFormulario?.controls['nombre']?.invalid
  }

  guardar() {
    console.log('Formulario posteado')
  }

}
