import { FormsModule } from '@angular/forms';
import { createMock } from '@testing-library/angular/jest-utils';

import { render, screen, fireEvent } from '@testing-library/angular';
import { HeroService } from '../services/hero/hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeroDetailComponent', () => {
  test('should render component', async () => {
    const heroService = createMock(HeroService);
    heroService.getHero = jest.fn(() => of({id: 1, name: 'Shero'}));
    heroService.updateHero = jest.fn();

    await render(HeroDetailComponent, {
      imports: [FormsModule, RouterTestingModule],
      providers: [{
        provide: HeroService,
        useValue: heroService
      }],
    });
    const saveButton = screen.getByTestId('save');
    fireEvent.click(saveButton);
  });
});
