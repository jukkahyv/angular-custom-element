import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyCustomElementComponent } from './my-custom-element/my-custom-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'custom-element';

  constructor(injector: Injector, element: ElementRef<HTMLElement>) {
    // From https://angular.io/guide/elements
    const PopupElement = createCustomElement(MyCustomElementComponent, {injector});
    customElements.define('my-custom-element', PopupElement);
  }

}
