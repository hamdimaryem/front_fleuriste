import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GBDFleuristeComponent } from './gbd-fleuriste.component';

describe('GBDFleuristeComponent', () => {
  let component: GBDFleuristeComponent;
  let fixture: ComponentFixture<GBDFleuristeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GBDFleuristeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GBDFleuristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
