import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseTraitHumidite } from './expertise-trait-humidite';

describe('ExpertiseTraitHumidite', () => {
  let component: ExpertiseTraitHumidite;
  let fixture: ComponentFixture<ExpertiseTraitHumidite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertiseTraitHumidite],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertiseTraitHumidite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
