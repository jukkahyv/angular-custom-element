import { Component, ElementRef, Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createCustomElement } from '@angular/elements';

import { MyCustomElementComponent } from './my-custom-element.component';

@Component({
  template: '<div></div>',
  selector: 'app-my-custom-element-host',
})
class MyCustomElementHostComponent {
  constructor(injector: Injector, public element: ElementRef) {
    MyCustomElementComponent.tryRegister(injector);
  }
}

describe('MyCustomElementComponent', () => {
  let component: MyCustomElementHostComponent;
  let fixture: ComponentFixture<MyCustomElementHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCustomElementComponent, MyCustomElementHostComponent ]
    })
    .compileComponents();

    const injector = TestBed.inject(Injector);
    /*MyCustomElementComponent.
    const PopupElement = createCustomElement(MyCustomElementComponent, {injector});
    if (!customElements.get('my-custom-element')) customElements.define('my-custom-element', PopupElement);*/

    fixture = TestBed.createComponent(MyCustomElementHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const customElem = document.createElement('my-custom-element');
    component.element.nativeElement.appendChild(customElem);
    expect(customElem.innerHTML).not.toBe('');
    expect(customElem.innerText).toBe('my-custom-element works!');
  });
});
