import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecolectorSidebar } from './recolector-sidebar';

describe('RecolectorSidebar', () => {
  let component: RecolectorSidebar;
  let fixture: ComponentFixture<RecolectorSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecolectorSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecolectorSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
