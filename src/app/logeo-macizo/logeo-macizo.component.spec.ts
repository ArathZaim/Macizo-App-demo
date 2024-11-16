import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogeoMacizoComponent } from './logeo-macizo.component';

describe('LogeoMacizoComponent', () => {
  let component: LogeoMacizoComponent;
  let fixture: ComponentFixture<LogeoMacizoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogeoMacizoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogeoMacizoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
