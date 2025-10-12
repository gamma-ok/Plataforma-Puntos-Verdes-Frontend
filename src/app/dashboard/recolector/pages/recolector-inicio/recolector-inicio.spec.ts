import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolectorInicio } from './recolector-inicio';

describe('RecolectorInicio', () => {
  let component: RecolectorInicio;
  let fixture: ComponentFixture<RecolectorInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecolectorInicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecolectorInicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
