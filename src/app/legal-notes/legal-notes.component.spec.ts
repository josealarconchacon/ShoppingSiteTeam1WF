import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNotesComponent } from './legal-notes.component';

describe('LegalNotesComponent', () => {
  let component: LegalNotesComponent;
  let fixture: ComponentFixture<LegalNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalNotesComponent]
    });
    fixture = TestBed.createComponent(LegalNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
