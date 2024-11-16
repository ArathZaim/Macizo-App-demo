import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciaRecetaComponent } from './sugerencia-receta.component';

describe('SugerenciaRecetaComponent', () => {
  let component: SugerenciaRecetaComponent;
  let fixture: ComponentFixture<SugerenciaRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugerenciaRecetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SugerenciaRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
