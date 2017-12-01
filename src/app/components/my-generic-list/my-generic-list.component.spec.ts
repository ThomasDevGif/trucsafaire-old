import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGenericListComponent } from './my-generic-list.component';

describe('MyGenericListComponent', () => {
  let component: MyGenericListComponent;
  let fixture: ComponentFixture<MyGenericListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGenericListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGenericListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
