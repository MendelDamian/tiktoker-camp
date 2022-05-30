import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormData } from './form/form.component';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  host = 'https://imsi.pl:5000/';

  constructor(private http: HttpClient) {
  }

  createUser(formData: FormData): Observable<UserCreateResponse> {
    let userCreate_t: UserCreate = {
      name: formData.firstName.value + ' ' + formData.lastName.value,
    };
    return this.http.put<UserCreateResponse>(this.host + 'players', userCreate_t);
  }

  updateUser(id: number, formData: FormData): Observable<UserUpdateResponse> {
    let userUpdate: UserUpdate = {
      p0: formData.firstName.value,
      p1: formData.lastName.value,
      p2: formData.email.value,
      p3: formData.phone.value,
      p4: '',
      p5: '',
      p6: '',
      p7: '',
      p8: '',
      p9: ''
    };
    return this.http.put<UserUpdateResponse>(this.host + 'players/' + id, userUpdate);
  }
}

export interface UserCreate {
  name: string;
}

export interface UserCreateResponse {
  id: number;
}

export interface UserUpdate {
  p0: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  p7: string;
  p8: string;
  p9: string;
}

export interface UserUpdateResponse {
  err: number;
}