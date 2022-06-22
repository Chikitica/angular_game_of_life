import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumToArrayPipe } from './pipes/num-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumToArrayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
