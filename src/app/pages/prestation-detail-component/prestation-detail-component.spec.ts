import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationDetailComponent, PRESTATIONS_DATABASE } from './prestation-detail-component';
import { Prestations } from '../prestations/prestations';

describe('PrestationDetailComponent', () => {
  let component: PrestationDetailComponent;
  let fixture: ComponentFixture<PrestationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestationDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrestationDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a detail page for every prestation card', () => {
    const prestationIds = new Prestations().prestationsList.map(prestation => prestation.id);

    expect(prestationIds.every(id => PRESTATIONS_DATABASE[id] !== undefined)).toBe(true);
  });
});
