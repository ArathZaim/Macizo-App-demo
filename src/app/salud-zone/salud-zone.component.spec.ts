import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludZoneComponent } from './salud-zone.component';

describe('SaludZoneComponent', () => {
  let component: SaludZoneComponent;
  let fixture: ComponentFixture<SaludZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaludZoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaludZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
