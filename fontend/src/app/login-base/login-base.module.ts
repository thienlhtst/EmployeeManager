import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AllowanceService } from '../../services/allowance.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes=[
  {
    path:'',
    children:[
      {path:'',component: LoginComponent}
    ]
  }
]
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports:[LoginComponent],
  providers:[AllowanceService]
})
export class LoginBaseModule { }
