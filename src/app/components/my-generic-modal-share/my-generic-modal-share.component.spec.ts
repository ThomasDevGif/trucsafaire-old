import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGenericModalShareComponent } from './my-generic-modal-share.component';

describe('MyGenericModalShareComponent', () => {
  let component: MyGenericModalShareComponent;
  let fixture: ComponentFixture<MyGenericModalShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGenericModalShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGenericModalShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
