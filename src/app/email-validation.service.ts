import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EmailValidationService {

  constructor(private http: HttpClient) { }

  isEmailUnique(email: String): boolean {
    return true;
  }
}
