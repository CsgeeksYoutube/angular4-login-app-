import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {UserService}  from './user.service';

const appRoutes:Routes = [ {
 
 path: '',
 component: LoginFormComponent

},
{
  path: 'dashboard',
  canActivate: [AuthGuard],
  component: DashboardComponent

}

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [ 
   RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
