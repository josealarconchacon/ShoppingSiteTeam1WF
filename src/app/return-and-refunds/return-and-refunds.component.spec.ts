import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAndRefundsComponent } from './return-and-refunds.component';

describe('ReturnAndRefundsComponent', () => {
  let component: ReturnAndRefundsComponent;
  let fixture: ComponentFixture<ReturnAndRefundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnAndRefundsComponent]
    });
    fixture = TestBed.createComponent(ReturnAndRefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
