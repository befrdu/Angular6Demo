import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankingApplicationComponent } from './banking-application/banking-application.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    BankingApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
