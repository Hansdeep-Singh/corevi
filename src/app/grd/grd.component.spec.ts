import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrdComponent } from './grd.component';

describe('GrdComponent', () => {
  let component: GrdComponent;
  let fixture: ComponentFixture<GrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
