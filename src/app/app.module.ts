import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCustomElementComponent } from './my-custom-element/my-custom-element.component';
import { MyComponentWrapperComponent } from './my-component-wrapper/my-component-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomElementComponent,
    MyComponentWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
