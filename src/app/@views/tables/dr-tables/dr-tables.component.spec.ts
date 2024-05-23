import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrTablesComponent } from './dr-tables.component';

describe('DrTablesComponent', () => {
  let component: DrTablesComponent;
  let fixture: ComponentFixture<DrTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
