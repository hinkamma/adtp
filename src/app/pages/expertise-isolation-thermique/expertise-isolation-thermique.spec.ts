import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseIsolationThermique } from './expertise-isolation-thermique';

describe('ExpertiseIsolationThermique', () => {
  let component: ExpertiseIsolationThermique;
  let fixture: ComponentFixture<ExpertiseIsolationThermique>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseIsolationThermique],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertiseIsolationThermique);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
