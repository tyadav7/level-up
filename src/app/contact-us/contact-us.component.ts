import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor(private httpClient: HttpClient){

  }
  
  onSubmit(formResponse: FormResponse) {
    let url = `https://docs.google.com/forms/d/e/1FAIpQLSd9wRxKJGmzgLVy2YlKPl8xfF4jvMnttjT0UxvqrwPsfwQ2Bg/formResponse?&submit=Submit&usp=pp_url&entry.149590343=${formResponse.firstName}&entry.253671109=${formResponse.lastName}&entry.684964430=${formResponse.email}&entry.2092632772=${formResponse.phone}&entry.2051660335=${formResponse.message}`;
    let x = window.open(url, "", "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657");
    setTimeout( () => x?.close(), 2000);
  }

}

export interface FormResponse {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}
