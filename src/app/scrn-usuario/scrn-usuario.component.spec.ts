import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrnUsuarioComponent } from './scrn-usuario.component';

describe('ScrnUsuarioComponent', () => {
  let component: ScrnUsuarioComponent;
  let fixture: ComponentFixture<ScrnUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrnUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrnUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
