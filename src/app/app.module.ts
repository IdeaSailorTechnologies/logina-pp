import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './core/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NbThemeModule, NbButtonModule, NbInputModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }