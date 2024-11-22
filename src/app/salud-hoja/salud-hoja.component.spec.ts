import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludHojaComponent } from './salud-hoja.component';

describe('SaludHojaComponent', () => {
  let component: SaludHojaComponent;
  let fixture: ComponentFixture<SaludHojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaludHojaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaludHojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
