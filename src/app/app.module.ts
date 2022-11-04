import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCustomElementComponent } from './my-custom-element/my-custom-element.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
