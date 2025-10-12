import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadanoSidebar } from './ciudadano-sidebar';

describe('CiudadanoSidebar', () => {
  let component: CiudadanoSidebar;
  let fixture: ComponentFixture<CiudadanoSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiudadanoSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadanoSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
