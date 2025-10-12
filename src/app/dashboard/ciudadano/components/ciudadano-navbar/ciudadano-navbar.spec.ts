import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadanoNavbar } from './ciudadano-navbar';

describe('CiudadanoNavbar', () => {
  let component: CiudadanoNavbar;
  let fixture: ComponentFixture<CiudadanoNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiudadanoNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadanoNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
