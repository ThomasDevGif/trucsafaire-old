import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGenericLoaderComponent } from './my-generic-loader.component';

describe('MyGenericLoaderComponent', () => {
  let component: MyGenericLoaderComponent;
  let fixture: ComponentFixture<MyGenericLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGenericLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGenericLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
