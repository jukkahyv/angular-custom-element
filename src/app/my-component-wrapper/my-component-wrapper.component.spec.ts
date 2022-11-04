import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentWrapperComponent } from './my-component-wrapper.component';

describe('MyComponentWrapperComponent', () => {
  let component: MyComponentWrapperComponent;
  let fixture: ComponentFixture<MyComponentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
