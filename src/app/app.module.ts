import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EligibleCalcComponent } from './components/eligible-calc/eligible-calc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { CardsSectionComponent } from './components/cards-section/cards-section.component';
import { OpenAcSectionComponent } from './components/open-ac-section/open-ac-section.component';
import { BottomPageComponent } from './components/bottom-page/bottom-page.component';
import { SimpleSectionComponent } from './components/simple-section/simple-section.component';
import { TopPageComponent } from './components/top-page/top-page.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavBarComponent,
    EligibleCalcComponent,
    CardsSectionComponent,
    OpenAcSectionComponent,
    BottomPageComponent,
    SimpleSectionComponent,
    TopPageComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
