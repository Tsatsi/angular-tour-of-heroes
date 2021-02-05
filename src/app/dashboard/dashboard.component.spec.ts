import { RouterTestingModule } from '@angular/router/testing';
import { render, screen } from '@testing-library/angular';
import { createMock } from '@testing-library/angular/jest-utils';

import { of } from 'rxjs';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero/hero.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  test('should render component with the heroes displayed', async () => {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'sarah',
      },
      {
        id: 2,
        name: 'charlotte',
      },
    ];
    const heroService = createMock(HeroService);
    heroService.getHeroes = jest.fn(() => of(heroes));

    await render(DashboardComponent, {
      declarations: [HeroSearchComponent],
      providers: [{ provide: HeroService, useValue: heroService }],
      imports: [RouterTestingModule]
    });
    expect(screen.getByText('charlotte')).toBeVisible();
    expect(screen.getByText('sarah')).toBeVisible();
  });
});
