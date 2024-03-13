import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAjoutPatientComponent } from './formulaire-ajout-patient.component';

describe('FormulaireAjoutPatientComponent', () => {
  let component: FormulaireAjoutPatientComponent;
  let fixture: ComponentFixture<FormulaireAjoutPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireAjoutPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireAjoutPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
