import {Component} from '@angular/core';
import {isPhonenumber, isName, validEmail} from "../../mixins/functions";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  isValid: boolean = false;

  formValid: FormValid = {
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
  }

  formData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  }

  constructor() {
  }

  firstNameValid(): string {
    this.isValid = false;
    if (!this.formData.firstName.length) {
      return "";
    }

    if (!isName(this.formData.firstName)) {
      return "is-invalid";
    }

    this.isValid = true;
    return "is-valid";
  }

  lastNameValid(): string {
    this.isValid = false;
    if (!this.formData.lastName.length) {
      return "";
    }

    if (!isName(this.formData.lastName)) {
      return "is-invalid";
    }

    this.isValid = true;
    return "is-valid"
  }

  emailValid(): string {
    this.isValid = false;
    if (!this.formData.email.length) {
      return "";
    }

    if (!validEmail(this.formData.email)) {
      return "is-invalid";
    }

    this.isValid = true;
    return "is-valid";
  }

  numberValid(): string {
    this.isValid = false;
    if (!this.formData.phone.length) {
      return "";
    }

    if (!isPhonenumber(this.formData.phone)) {
      return "is-invalid";
    }

    this.isValid = true;
    return "is-valid";
  }


}

export interface FormValid {
  firstName: boolean,
  lastName: boolean,
  email: boolean,
  phone: boolean,
}

export interface FormData {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
}

