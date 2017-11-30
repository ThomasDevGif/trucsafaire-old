import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGenericItemComponent } from './my-generic-item.component';

describe('MyGenericItemComponent', () => {
  let component: MyGenericItemComponent;
  let fixture: ComponentFixture<MyGenericItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGenericItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGenericItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
