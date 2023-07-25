import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesCollectionComponent } from './shoes-collection.component';

describe('ShoesCollectionComponent', () => {
  let component: ShoesCollectionComponent;
  let fixture: ComponentFixture<ShoesCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoesCollectionComponent]
    });
    fixture = TestBed.createComponent(ShoesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
