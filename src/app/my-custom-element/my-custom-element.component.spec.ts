import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createCustomElement } from '@angular/elements';

import { MyCustomElementComponent } from './my-custom-element.component';

describe('MyCustomElementComponent', () => {
  //let component: MyCustomElementComponent;
  let fixture: ComponentFixture<MyCustomElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCustomElementComponent ]
    })
    .compileComponents();

    const injector = TestBed.inject(Injector);
    const PopupElement = createCustomElement(MyCustomElementComponent, {injector});
    if (!customElements.get('my-custom-element')) customElements.define('my-custom-element', PopupElement);
    //fixture = TestBed.createComponent(MyCustomElementComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    const customElem = document.createElement('my-custom-element');
    expect(customElem.innerHTML).not.toBe('');
    expect(customElem.innerText).toBe('my-custom-element works!');
  });
});
