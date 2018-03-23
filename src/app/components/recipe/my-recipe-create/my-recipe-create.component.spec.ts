import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecipeCreateComponent } from './my-recipe-create.component';

describe('MyRecipeCreateComponent', () => {
  let component: MyRecipeCreateComponent;
  let fixture: ComponentFixture<MyRecipeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecipeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecipeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
