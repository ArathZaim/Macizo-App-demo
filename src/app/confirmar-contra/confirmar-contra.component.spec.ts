import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarContraComponent } from './confirmar-contra.component';

describe('ConfirmarContraComponent', () => {
  let component: ConfirmarContraComponent;
  let fixture: ComponentFixture<ConfirmarContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarContraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmarContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
