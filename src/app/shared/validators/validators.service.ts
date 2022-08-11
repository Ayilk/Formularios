import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

   noPuedeSerStrider (control: FormControl): ValidationErrors | null{   

    const valor = control.value?.trim().toLowerCase();
    //console.log(valor)

    if(valor === 'strider'){
      //return error
      return {
        noStrider: true
      }
    }
    //Si regresamos null significa que todo salió bien
    return null

  }
}
