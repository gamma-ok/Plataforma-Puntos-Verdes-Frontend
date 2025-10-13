import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadanoLayout } from './ciudadano-layout';

describe('CiudadanoLayout', () => {
  let component: CiudadanoLayout;
  let fixture: ComponentFixture<CiudadanoLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiudadanoLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadanoLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
