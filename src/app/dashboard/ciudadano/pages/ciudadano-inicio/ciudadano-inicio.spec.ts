import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadanoInicio } from './ciudadano-inicio';

describe('CiudadanoInicio', () => {
  let component: CiudadanoInicio;
  let fixture: ComponentFixture<CiudadanoInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiudadanoInicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadanoInicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
