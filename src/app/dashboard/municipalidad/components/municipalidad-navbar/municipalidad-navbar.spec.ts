import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalidadNavbar } from './municipalidad-navbar';

describe('MunicipalidadNavbar', () => {
  let component: MunicipalidadNavbar;
  let fixture: ComponentFixture<MunicipalidadNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalidadNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicipalidadNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
