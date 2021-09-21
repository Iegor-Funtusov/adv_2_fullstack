import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentItemsComponent } from './department-items.component';

describe('DepartmentItemsComponent', () => {
  let component: DepartmentItemsComponent;
  let fixture: ComponentFixture<DepartmentItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
