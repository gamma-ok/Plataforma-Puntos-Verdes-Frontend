import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalidadSidebar } from './municipalidad-sidebar';

describe('MunicipalidadSidebar', () => {
  let component: MunicipalidadSidebar;
  let fixture: ComponentFixture<MunicipalidadSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunicipalidadSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicipalidadSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
