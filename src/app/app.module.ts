import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './core/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerService} from './customer.service';
import { LoginService} from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
// tslint:disable-next-line: deprecation
    HttpModule,
    NbThemeModule.forRoot(),
    RouterModule,
    NbSidebarModule,
    NbLayoutModule,
    BrowserAnimationsModule,
    NbLayoutModule
  ],
  providers: [NbSidebarService, CustomerService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
