import { Directive, ElementRef, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';



export function UppercaseValidation(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) { return null; }
    return control.value === control.value.toUpperCase() ? null : { uppercase: 'Tiene que estar en mayusculas' }
  };
}

@Directive({
  selector: '[uppercase]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UppercaseValidator, multi: true }]
})
export class UppercaseValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return UppercaseValidation()(control);
  }
}



export function NIFValidation(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) { return null; }
    const err = { nif: { invalidFormat: true, invalidChar: true, message: 'No es un NIF valido' } };
    if (/^\d{1,8}\w$/.test(control.value)) {
      const letterValue = control.value.substr(control.value.length - 1);
      const numberValue = control.value.substr(0, control.value.length - 1);
      err.nif.invalidFormat = false;
      return letterValue.toUpperCase() === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(numberValue % 23) ? null : err;
    } else { return err; }
  };
}
@Directive({
  selector: '[nif][formControlName],[nif][formControl],[nif][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NIFValidator, multi: true }]
})
export class NIFValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return NIFValidation()(control);
  }
}


// // IBAN
// @Directive({
//   selector: '[iban][formControlName],[iban][formControl],[iban][ngModel]',
//   providers: [{ provide: NG_VALIDATORS, useExisting: IBANValidator, multi: true }]
// })
// export class IBANValidator implements Validator {
//   validate(control: AbstractControl): ValidationErrors | null {
//     return IBANValidation()(control);
//   }
// }

// export function IBANValidation(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//       if (!control.value) { return null; }
//     const err = { iban: { invalidFormat: true, invalidChar: true, message: 'No es un IBAN valido' } };
//     let parsedValue: string = String();
//     let invalid: boolean = false;
//       if (parsedValue.length < 15) { // iban con 15 carateres longitud
//         return { invalidIban: true };
//       }
//     let regexp = new RegExp("^&#91;a-zA-Z0-9&#93;+$");  // test para caracteres ilegales
//       if (regexp.test(parsedValue) == false) {
//         return { invalidIban: true };
//       }
//     parsedValue = (parsedValue.substr(4) + parsedValue.substr(0, 4)).toUpperCase();  // mover los primeros cuatro caracteres hacia atrásy  todo esté en mayúsculas
//     let valueWithConvertedNumbers: string = "";
//       for (var i = 0; i < parsedValue.length; i++) {
//         let character: number = parsedValue.charCodeAt(i);
//         if (character > 64 && character < 91) {
//           valueWithConvertedNumbers += String(character - 55);
//         }
//         else {
//           valueWithConvertedNumbers += String.fromCharCode(character);
//         }
//       }
//     return null;
//   }
// };





// TYPE
@Directive({
  selector: '[type][formControlName],[type][formControl],[type][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: TypeValidator, multi: true }
  ]
})
export class TypeValidator implements Validator {
  constructor(private elem: ElementRef) { }
  validate(control: AbstractControl): ValidationErrors | null {
    const valor = control.value;
    if (valor) {
      const dom = this.elem.nativeElement;
      if (dom.validity) { // dom.checkValidity();
        return dom.validity.typeMismatch ? { 'type': dom.validationMessage } : null;
      }
    }
    return null;
  }
}



@Directive({
  selector: '[equalsTo][formControlName],[equalsTo][formControl],[equalsTo][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EqualValidator, multi: true }]
})
export class EqualValidator implements Validator {
  @Input('equalsTo') validateEqual: string | null | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    if (!this.validateEqual)
      throw new Error('Falta el control de referencia.');

    let valor = control.value;
    let cntrlBind = control.root.get(this.validateEqual);
    if (!cntrlBind)
      throw new Error('No encuentro el control de referencia.');

    if (valor) {
      return (valor !== cntrlBind.value) ? { 'equalsTo': `${valor} es distinto de ${cntrlBind?.value}` } : null;
    }
    return null;
  }
}

//ARREGLAR greaterthan
@Directive({
  selector: '[greaterthan][formControlName],[greaterthan][formControl],[greaterthan][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: GreaterthanValidator, multi: true }]
})
export class GreaterthanValidator implements Validator {
  @Input('greaterthan') validateEqual: string | null | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    if (!this.validateEqual)
      throw new Error('Falta el control de referencia.');

    let valor = control.value;
    let cntrlBind = control.root.get(this.validateEqual);
    if (!cntrlBind)
      throw new Error('No encuentro el control de referencia.');

    if (valor) {
      return (valor !== cntrlBind.value) ? { 'equalsTo': `${valor} es distinto de ${cntrlBind?.value}` } : null;
    }
    return null;
  }
}


export const MIS_VALIDADORES = [UppercaseValidator, NIFValidator, TypeValidator, EqualValidator]
