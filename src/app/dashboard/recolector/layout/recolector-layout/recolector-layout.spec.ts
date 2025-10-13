import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolectorLayout } from './recolector-layout';

describe('RecolectorLayout', () => {
  let component: RecolectorLayout;
  let fixture: ComponentFixture<RecolectorLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecolectorLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecolectorLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
