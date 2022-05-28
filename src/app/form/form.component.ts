import { Component } from '@angular/core';
import { validateEmail, validateName, validatePhoneNumber } from '../../mixins/functions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: FormData = {
    firstName: {
      value: '',
      valid: ValidationState.none,
      errorMessages: [
        'Pole wymagane.',
        'Imię musi się zaczynać od wielkiej litery.',
      ]
    },
    lastName: {
      value: '',
      valid: ValidationState.none,
      errorMessages: [
        'Pole wymagane.',
        'Nazwisko musi się zaczynać od wielkiej litery.',
      ]
    },
    email: {
      value: '',
      valid: ValidationState.none,
      errorMessages: [
        'Pole wymagane.',
        'Niepoprawny adres email.',
      ]
    },
    phone: {
      value: '',
      valid: ValidationState.none,
      errorMessages: [
        'Pole wymagane.',
        'Niepoprawny numer telefonu.',
        'Numer powinien składać się z 9 cyfr.',
      ]
    },
  };

  constructor() {
  }

  onClickHandler(): void {
    this.firstNameValid();
    this.lastNameValid();
    this.emailValid();
    this.phoneValid();

    // Check if all fields are valid
    if (this.formData.firstName.valid !== ValidationState.valid
      || this.formData.lastName.valid !== ValidationState.valid
      || this.formData.email.valid !== ValidationState.valid
      || this.formData.phone.valid !== ValidationState.valid) {
      return;
    }

    // TODO: Send data to server
  }

  firstNameValid(): void {
    if (!this.formData.firstName.value.length || !validateName(this.formData.firstName.value)) {
      this.formData.firstName.valid = ValidationState.invalid;
      return;
    }

    this.formData.firstName.valid = ValidationState.valid;
  }

  lastNameValid(): void {
    if (!this.formData.lastName.value.length || !validateName(this.formData.lastName.value)) {
      this.formData.lastName.valid = ValidationState.invalid;
      return;
    }

    this.formData.lastName.valid = ValidationState.valid;
  }

  emailValid(): void {
    if (!this.formData.email.value.length || !validateEmail(this.formData.email.value)) {
      this.formData.email.valid = ValidationState.invalid;
      return;
    }

    this.formData.email.valid = ValidationState.valid;
  }

  phoneValid(): void {
    if (!this.formData.phone.value.length || !validatePhoneNumber(this.formData.phone.value)) {
      this.formData.phone.valid = ValidationState.invalid;
    } else {
      this.formData.phone.valid = ValidationState.valid;
    }
  }

}

interface FormData {
  firstName: InputField,
  lastName: InputField,
  email: InputField,
  phone: InputField,
}

interface InputField {
  value: string,
  valid: ValidationState,
  errorMessages: Array<string>,
}

enum ValidationState {
  none,
  valid,
  invalid,
}
