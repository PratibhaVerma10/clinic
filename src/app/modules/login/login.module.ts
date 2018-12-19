import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import 'rxjs/add/operator/filter';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

import { LoginService } from './services/Login.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormGroup,
    HttpClientModule,
    ToastrService
  ],
  providers: [LoginService]
})
export class LoginModule { 


}

