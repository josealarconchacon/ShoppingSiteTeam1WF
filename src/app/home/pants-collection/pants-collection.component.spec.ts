import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantsCollectionComponent } from './pants-collection.component';

describe('PantsCollectionComponent', () => {
  let component: PantsCollectionComponent;
  let fixture: ComponentFixture<PantsCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantsCollectionComponent]
    });
    fixture = TestBed.createComponent(PantsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
