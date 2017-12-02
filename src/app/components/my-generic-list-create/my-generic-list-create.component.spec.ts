import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGenericListCreateComponent } from './my-generic-list-create.component';

describe('MyGenericListCreateComponent', () => {
  let component: MyGenericListCreateComponent;
  let fixture: ComponentFixture<MyGenericListCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGenericListCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGenericListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
