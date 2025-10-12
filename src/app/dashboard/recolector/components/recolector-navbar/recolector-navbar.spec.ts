import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolectorNavbar } from './recolector-navbar';

describe('RecolectorNavbar', () => {
  let component: RecolectorNavbar;
  let fixture: ComponentFixture<RecolectorNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecolectorNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecolectorNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
