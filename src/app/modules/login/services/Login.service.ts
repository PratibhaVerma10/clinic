import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { 
    const apiBase = environment.apiBase;
    console.log(environment.apiBase);
  }
  userLogin(loginForm) {
    console.log(loginForm);
  return this.http.post<any>(environment.apiBase + 'Owner/Login', loginForm )
}
}
