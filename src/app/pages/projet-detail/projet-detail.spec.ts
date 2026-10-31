import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ProjetDetail } from './projet-detail';

describe('ProjetDetail', () => {
  let component: ProjetDetail;
  let fixture: ComponentFixture<ProjetDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetDetail],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders only the two images provided by a project', () => {
    component.currentProjet = component.projetsData['1'];
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.image-box').length).toBe(2);
  });

  it('limits the project image list to three images', () => {
    component.currentProjet = {
      ...component.projetsData['1'],
      images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg'],
    };

    expect(component.projectImages).toEqual(['image-1.jpg', 'image-2.jpg', 'image-3.jpg']);
  });

  it('skips missing image entries and safely handles a project without images', () => {
    component.currentProjet = {
      ...component.projetsData['1'],
      images: ['image-1.jpg', '', '  ', 'image-2.jpg'],
    };
    expect(component.projectImages).toEqual(['image-1.jpg', 'image-2.jpg']);

    component.currentProjet = {
      ...component.projetsData['1'],
      images: undefined,
    };
    expect(component.projectImages).toEqual([]);
  });

  it('accepts three different images for a project', () => {
    component.currentProjet = {
      ...component.projetsData['1'],
      images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
    };

    expect(component.projectImages).toEqual(['image-1.jpg', 'image-2.jpg', 'image-3.jpg']);
  });
});
