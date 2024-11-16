import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteoZnComponent } from './testeo-zn.component';

describe('TesteoZnComponent', () => {
  let component: TesteoZnComponent;
  let fixture: ComponentFixture<TesteoZnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteoZnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesteoZnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
