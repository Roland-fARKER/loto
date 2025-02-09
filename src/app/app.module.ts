import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CruzetaComponent } from './cruzeta/cruzeta.component';
import { FooterComponent } from './footer/footer.component';
import { CaidasComponent } from './caidas/caidas.component';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [AppComponent, CruzetaComponent, FooterComponent, CaidasComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
