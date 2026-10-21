import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseCharpente } from './expertise-charpente';

describe('ExpertiseCharpente', () => {
  let component: ExpertiseCharpente;
  let fixture: ComponentFixture<ExpertiseCharpente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseCharpente],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertiseCharpente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
