import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoScrnComponent } from './objetivo-scrn.component';

describe('ObjetivoScrnComponent', () => {
  let component: ObjetivoScrnComponent;
  let fixture: ComponentFixture<ObjetivoScrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetivoScrnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjetivoScrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
