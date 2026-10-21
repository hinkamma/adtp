import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseToiture } from './expertise-toiture';

describe('ExpertiseToiture', () => {
  let component: ExpertiseToiture;
  let fixture: ComponentFixture<ExpertiseToiture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseToiture],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertiseToiture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
