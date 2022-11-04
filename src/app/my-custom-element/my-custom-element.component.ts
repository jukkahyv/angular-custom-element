import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-my-custom-element',
  templateUrl: './my-custom-element.component.html',
  styleUrls: ['./my-custom-element.component.css']
})
export class MyCustomElementComponent implements OnInit {

  public static tryRegister(injector: Injector) {
    // From https://angular.io/guide/elements
    const PopupElement = createCustomElement(MyCustomElementComponent, {injector});
    if (!customElements.get('my-custom-element')) customElements.define('my-custom-element', PopupElement);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
