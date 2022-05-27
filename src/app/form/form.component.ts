import { Component } from '@angular/core';
import { validateEmail, validateName, validatePhoneNumber } from '../../mixins/functions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  isValid: boolean = false;
  formData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  cssProperties: Map<string, string> = new Map([
    ['none', ''],
    ['valid', 'is-valid'],
    ['invalid', 'is-invalid'],
  ]);

  constructor() {
  }

  firstNameValid(): string {
    this.isValid = false;
    if (!this.formData.firstName.length) {
      return this.cssProperties.get('none') || '';
    }

    if (!validateName(this.formData.firstName)) {
      return this.cssProperties.get('invalid') || '';
    }

    this.isValid = true;
    return this.cssProperties.get('valid') || '';
  }

  lastNameValid(): string {
    this.isValid = false;
    if (!this.formData.lastName.length) {
      return this.cssProperties.get('none') || '';
    }

    if (!validateName(this.formData.lastName)) {
      return this.cssProperties.get('invalid') || '';
    }

    this.isValid = true;
    return this.cssProperties.get('valid') || '';
  }

  emailValid(): string {
    this.isValid = false;
    if (!this.formData.email.length) {
      return this.cssProperties.get('none') || '';
    }

    if (!validateEmail(this.formData.email)) {
      return this.cssProperties.get('invalid') || '';
    }

    this.isValid = true;
    return this.cssProperties.get('valid') || '';
  }

  numberValid(): string {
    this.isValid = false;
    if (!this.formData.phone.length) {
      return this.cssProperties.get('none') || '';
    }

    if (!validatePhoneNumber(this.formData.phone)) {
      return 'is-invalid';
    }

    this.isValid = true;
    return 'is-valid';
  }

}

interface FormData {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
}
