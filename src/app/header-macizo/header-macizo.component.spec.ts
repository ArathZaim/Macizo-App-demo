import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMacizoComponent } from './header-macizo.component';

describe('HeaderMacizoComponent', () => {
  let component: HeaderMacizoComponent;
  let fixture: ComponentFixture<HeaderMacizoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMacizoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderMacizoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
