import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGenericModalConfirmComponent } from './my-generic-modal-confirm.component';

describe('MyGenericModalConfirmComponent', () => {
  let component: MyGenericModalConfirmComponent;
  let fixture: ComponentFixture<MyGenericModalConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGenericModalConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGenericModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
