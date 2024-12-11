import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDiaComponent } from './p-dia.component';

describe('PDiaComponent', () => {
  let component: PDiaComponent;
  let fixture: ComponentFixture<PDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
