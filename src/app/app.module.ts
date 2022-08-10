import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './views/contato/contato.component';

import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './views/card/card.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
