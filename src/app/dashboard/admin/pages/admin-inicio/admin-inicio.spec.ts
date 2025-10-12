import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInicio } from './admin-inicio';

describe('AdminInicio', () => {
  let component: AdminInicio;
  let fixture: ComponentFixture<AdminInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
