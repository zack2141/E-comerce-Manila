import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctosComponent } from './prodctos.component';

describe('ProdctosComponent', () => {
  let component: ProdctosComponent;
  let fixture: ComponentFixture<ProdctosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdctosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdctosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
