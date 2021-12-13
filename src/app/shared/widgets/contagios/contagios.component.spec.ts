import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContagiosComponent } from './contagios.component';

describe('ContagiosComponent', () => {
  let component: ContagiosComponent;
  let fixture: ComponentFixture<ContagiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContagiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContagiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
