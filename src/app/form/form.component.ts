import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import {
  validateEmail,
  validateLettersOnly,
  validateMaxLength,
  validateMinLength,
  validateNonEmpty,
  validateNumbersOnly,
  validateStartsWithUpperCase
} from '../../mixins/functions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  validationState = ValidationState; // For using in template
  createUserErr: ValidationState = ValidationState.none;
  loading: boolean = false;

  formData: FormData = {
    firstName: {
      value: '',
      valid: ValidationState.none,
      validation: [
        {
          validator: validateMinLength,
          n: 2,
          state: ValidationState.none,
          errorMessage: 'Imię jest za krótkie.'
        },
        {
          validator: validateMaxLength,
          n: 32,
          state: ValidationState.none,
          errorMessage: 'Imię jest za długie.'
        },
        {
          validator: validateLettersOnly,
          state: ValidationState.none,
          errorMessage: 'Imię może zawierać tylko litery.'
        },
        {
          validator: validateStartsWithUpperCase,
          state: ValidationState.none,
          errorMessage: 'Imię musi zaczynać się z dużej litery.'
        },
        // {
        //   validator: validateUpperCaseOnlyOnBeginning,
        //   state: ValidationState.none,
        //   errorMessage: 'Imię jest nieprawidłowe.'
        // },
        {
          validator: validateNonEmpty,
          state: ValidationState.none,
          errorMessage: 'Pole wymagane.'
        },
      ]
    },
    lastName: {
      value: '',
      valid: ValidationState.none,
      validation: [
        {
          validator: validateMinLength,
          n: 2,
          state: ValidationState.none,
          errorMessage: 'Nazwisko jest za krótkie.'
        },
        {
          validator: validateMaxLength,
          n: 32,
          state: ValidationState.none,
          errorMessage: 'Nazwisko jest za długie.'
        },
        {
          validator: validateLettersOnly,
          state: ValidationState.none,
          errorMessage: 'Nazwisko może zawierać tylko litery.'
        },
        {
          validator: validateStartsWithUpperCase,
          state: ValidationState.none,
          errorMessage: 'Nazwisko musi zaczynać się z dużej litery.'
        },
        // {
        //   validator: validateUpperCaseOnlyOnBeginning,
        //   state: ValidationState.none,
        //   errorMessage: 'Nazwisko jest nieprawidłowe.'
        // },
        {
          validator: validateNonEmpty,
          state: ValidationState.none,
          errorMessage: 'Pole wymagane.'
        },
      ]
    },
    email: {
      value: '',
      valid: ValidationState.none,
      validation: [
        {
          validator: validateMaxLength,
          n: 128,
          state: ValidationState.none,
          errorMessage: 'Email jest za długi.'
        },
        {
          validator: validateEmail,
          state: ValidationState.none,
          errorMessage: 'Email jest nieprawidłowy.'
        },
        {
          validator: validateNonEmpty,
          state: ValidationState.none,
          errorMessage: 'Pole wymagane.'
        },
      ]
    },
    phone: {
      value: '',
      valid: ValidationState.none,
      validation: [
        {
          validator: validateMinLength,
          n: 9,
          state: ValidationState.none,
          errorMessage: 'Numer telefonu jest za krótki.'
        },
        {
          validator: validateMaxLength,
          n: 9,
          state: ValidationState.none,
          errorMessage: 'Numer telefonu jest za długi.'
        },
        {
          validator: validateNumbersOnly,
          state: ValidationState.none,
          errorMessage: 'Numer telefonu jest nieprawidłowy.'
        },
        {
          validator: validateNonEmpty,
          state: ValidationState.none,
          errorMessage: 'Pole wymagane.'
        },
      ]
    },
  };

  constructor(private database: DatabaseService) {
  }

  onClickHandler(): void {
    this.loading = true;
    this.createUserErr = ValidationState.none;

    this.validate('firstName');
    this.validate('lastName');
    this.validate('email');
    this.validate('phone');

    // Check if all fields are valid
    if (this.formData.firstName.valid !== ValidationState.valid
      || this.formData.lastName.valid !== ValidationState.valid
      || this.formData.email.valid !== ValidationState.valid
      || this.formData.phone.valid !== ValidationState.valid) {
      this.loading = false;
      return;
    }

    this.database.createUser(this.formData).subscribe(create_res => {
      if (create_res.id) {
        this.database.updateUser(create_res.id, this.formData).subscribe(update_res => {
          this.loading = false;
          if (update_res.err) {
            this.createUserErr = ValidationState.invalid;
          } else {
            this.clearForm();
            this.createUserErr = ValidationState.valid;
          }
        });
      } else {
        this.loading = false;
        this.createUserErr = ValidationState.invalid;
      }
    });
  }

  clearForm(): void {
    this.formData.firstName.value = '';
    this.formData.lastName.value = '';
    this.formData.email.value = '';
    this.formData.phone.value = '';

    this.formData.firstName.valid = ValidationState.none;
    this.formData.lastName.valid = ValidationState.none;
    this.formData.email.valid = ValidationState.none;
    this.formData.phone.valid = ValidationState.none;

    this.formData.firstName.validation.forEach(validation => {
      validation.state = ValidationState.none;
    });
    this.formData.lastName.validation.forEach(validation => {
      validation.state = ValidationState.none;
    });
    this.formData.email.validation.forEach(validation => {
      validation.state = ValidationState.none;
    });
    this.formData.phone.validation.forEach(validation => {
      validation.state = ValidationState.none;
    });
  }

  validate(field: string): void {
    this.formData[field].valid = ValidationState.none;
    this.formData[field].validation.forEach((validation) => {
      validation.state = validation.validator(this.formData[field].value, validation.n)
        ? ValidationState.valid : ValidationState.invalid;

      if (validation.state === ValidationState.invalid) {
        this.formData[field].valid = ValidationState.invalid;
      }
    });

    if (this.formData[field].valid === ValidationState.none) {
      this.formData[field].valid = ValidationState.valid;
    }
  }

}

export interface FormData {
  firstName: InputField,
  lastName: InputField,
  email: InputField,
  phone: InputField,

  [propName: string]: InputField;
}

interface InputField {
  value: string,
  valid: ValidationState,
  validation: Array<ValidationField>,
}

interface ValidationField {
  validator: (fieldValue: string, n?: number) => boolean,
  n?: number,
  state: ValidationState,
  errorMessage: string
}

enum ValidationState {
  none,
  valid,
  invalid,
}


