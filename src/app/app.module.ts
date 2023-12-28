import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningalertComponent } from './components/warningalert/warningalert.component';
import { SuccessalertComponent } from './components/successalert/successalert.component';
import { InfoalertComponent } from './components/infoalert/infoalert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningalertComponent,
    SuccessalertComponent,
    InfoalertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
