import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LayoutConHeaderComponent } from './layout-con-header/layout-con-header.component';
import { LayoutSinHeaderComponent } from './layout-sin-header/layout-sin-header.component';
import { LayoutRegisterComponent } from './layout-register/layout-register.component';
import { MainComponent } from './main/main.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponentComponent,
    LayoutConHeaderComponent,
    LayoutSinHeaderComponent,
    LayoutRegisterComponent,
    MainComponent,
    AgregarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
