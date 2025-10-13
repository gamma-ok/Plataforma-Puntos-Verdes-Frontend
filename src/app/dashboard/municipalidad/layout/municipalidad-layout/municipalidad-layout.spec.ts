import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalidadLayout } from './municipalidad-layout';

describe('MunicipalidadLayout', () => {
  let component: MunicipalidadLayout;
  let fixture: ComponentFixture<MunicipalidadLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalidadLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicipalidadLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
