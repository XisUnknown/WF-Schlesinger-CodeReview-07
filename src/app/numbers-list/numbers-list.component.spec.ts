import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersListComponent } from './numbers-list.component';

describe('NumbersListComponent', () => {
  let component: NumbersListComponent;
  let fixture: ComponentFixture<NumbersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
