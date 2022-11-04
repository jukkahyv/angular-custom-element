import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component-wrapper',
  templateUrl: './my-component-wrapper.component.html',
  styleUrls: ['./my-component-wrapper.component.css']
})
export class MyComponentWrapperComponent implements OnInit {

  constructor(private readonly element: ElementRef) { }

  ngOnInit() {
    const customElem = document.createElement('my-custom-element');
    this.element.nativeElement.appendChild(customElem);
  }


}
