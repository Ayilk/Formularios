import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validators/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },{
    validators: [this.validatorService.camposIguales('password', 'password2')]
  })

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorsService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Sandra Rangel",
      email: 'test1@mail.com',
      username: 'sandy_rangel'
    })
  }

  campoNoValido( campo:string ){
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched;
  }

}
