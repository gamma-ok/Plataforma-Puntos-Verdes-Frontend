import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosVerdes } from './puntos-verdes';

describe('PuntosVerdes', () => {
  let component: PuntosVerdes;
  let fixture: ComponentFixture<PuntosVerdes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuntosVerdes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntosVerdes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
