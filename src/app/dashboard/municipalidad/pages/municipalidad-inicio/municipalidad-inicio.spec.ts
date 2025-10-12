import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalidadInicio } from './municipalidad-inicio';

describe('MunicipalidadInicio', () => {
  let component: MunicipalidadInicio;
  let fixture: ComponentFixture<MunicipalidadInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalidadInicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicipalidadInicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
