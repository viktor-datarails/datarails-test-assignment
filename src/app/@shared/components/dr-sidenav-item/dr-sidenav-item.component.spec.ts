import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrSidenavItemComponent } from './dr-sidenav-item.component';

describe('DrSidenavItemComponent', () => {
  let component: DrSidenavItemComponent;
  let fixture: ComponentFixture<DrSidenavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrSidenavItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrSidenavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
