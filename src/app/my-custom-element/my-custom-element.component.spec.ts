import { Component, ElementRef, Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createCustomElement } from '@angular/elements';

import { MyCustomElementComponent } from './my-custom-element.component';

@Component({
  template: '<div></div>',
  selector: 'app-my-custom-element-host',
})
class MyCustomElementHostComponent {
  constructor(public element: ElementRef) {
  }
}

describe('MyCustomElementComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCustomElementComponent, MyCustomElementHostComponent ],
      teardown: { destroyAfterEach: false }
    })
    .compileComponents();

    // From https://angular.io/guide/elements
    const injector = TestBed.inject(Injector);
    const MyCustomElement = createCustomElement(MyCustomElementComponent, {injector});
    if (!customElements.get('my-custom-element')) customElements.define('my-custom-element', MyCustomElement);

  });

  // THIS DOES NOT WORK
  it('should work without host component', () => {
    const customElem = document.createElement('my-custom-element');
    expect(customElem.innerHTML).not.toBe('');
    expect(customElem.innerText).toBe('my-custom-element works!');
  });

  it('should work with host component', () => {
    const fixture = TestBed.createComponent(MyCustomElementHostComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const customElem = document.createElement('my-custom-element');

    // THIS MAKES IT WORK
    component.element.nativeElement.appendChild(customElem);
    fixture.detectChanges();

    expect(customElem.innerHTML).not.toBe('');
    expect(customElem.innerText).toBe('my-custom-element works!');
  });
});
