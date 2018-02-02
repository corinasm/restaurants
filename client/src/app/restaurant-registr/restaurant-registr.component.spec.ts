import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantRegistrComponent } from './restaurant-registr.component';

describe('RestaurantRegistrComponent', () => {
  let component: RestaurantRegistrComponent;
  let fixture: ComponentFixture<RestaurantRegistrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantRegistrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantRegistrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
