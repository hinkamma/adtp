import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationDetailComponent } from './prestation-detail-component';

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
});
