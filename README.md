# Angular custom element with tests

I was struggling to get [Angular custom elements](https://angular.io/guide/elements) working in unit tests. Here is minimal (?) application that works.

All the relevant code is in `my-custom-element.component.spec.ts`:

This registers the custom component. Note that checking previous registration is needed, otherwise running multiple tests fails.
```typescript
    const injector = TestBed.inject(Injector);
    const MyCustomElement = createCustomElement(MyCustomElementComponent, {injector});
    if (!customElements.get('my-custom-element')) customElements.define('my-custom-element', MyCustomElement);
```

First I tried creating element with `document.createElement` and checking content. It does not work.

```typescript
    const customElem = document.createElement('my-custom-element');
    expect(customElem.innerHTML).not.toBe('');
    expect(customElem.innerText).toBe('my-custom-element works!');
```

What was needed, we need to have a wrapper "host" Angular element, even if we're rendering the component using `document.createElement`.
```typescript
    const fixture = TestBed.createComponent(MyCustomElementHostComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const customElem = document.createElement('my-custom-element');

    // THIS MAKES IT WORK
    component.element.nativeElement.appendChild(customElem);
    fixture.detectChanges();

    expect(customElem.innerHTML).not.toBe('');
    expect(customElem.innerText).toBe('my-custom-element works!');
```

This solution is still not ideal, because it requires creating that "dummy" Angular component.

Disclaimer: I'm very novice with Angular (more of a React guy). I couldn't find any examples with unit tests. Hopefully this helps someone!

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

