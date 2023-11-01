import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })), // initial state
      state('*', style({ opacity: 1 })), // final state
      transition('void <=> *', animate('0.3s ease')), // transition
    ]),
  ],
})
export class ContactUsComponent {

  recorded:boolean = false;
  isSuccess:boolean = false;

  constructor(private httpClient: HttpClient) {

  }

  onSubmit(form: NgForm) {
    this.recorded = true;
    let formResponse: FormData = form.value;
    let url = 'https://script.google.com/macros/s/AKfycby8fhTyeZ0aIJLHqqrOzcla_naF4F_8U4wp94uo0BnK7Bf1mHHOetvO8nWUEP5Rp36K/exec';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('timestamp', new Date().toISOString());
    for (const [key, value] of Object.entries(formResponse)) {
      queryParams = queryParams.append(key, value);
    }

    this.httpClient.get<FormSubmitResponse>(url, { params: queryParams })
      .pipe(
        take(1)).subscribe((x: FormSubmitResponse) => {
      if (x.result === 'success') {
        this.recorded = false;
        this.isSuccess = true;
        form.resetForm();
      }
    });
  }
}

export interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export interface FormSubmitResponse {
  result: string;
  row: number;
}
