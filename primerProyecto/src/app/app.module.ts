import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VistaComponent } from './vista/vista.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VistaComponent,
    FormComponent,
    HomeComponent,
    InfoComponent,
    ModalComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(

      withInterceptorsFromDi()

      )
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
