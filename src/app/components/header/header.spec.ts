import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens and closes the mobile menu when the toggle is clicked', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector(
      'button[aria-controls="mobileMenuDropdown"]',
    );
    const menu: HTMLElement = fixture.nativeElement.querySelector('#mobileMenuDropdown');

    expect(menu.classList.contains('show-menu')).toBe(false);
    expect(button.getAttribute('aria-expanded')).toBe('false');

    button.click();
    fixture.detectChanges();

    expect(menu.classList.contains('show-menu')).toBe(true);
    expect(button.getAttribute('aria-expanded')).toBe('true');

    button.click();
    fixture.detectChanges();

    expect(menu.classList.contains('show-menu')).toBe(false);
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
