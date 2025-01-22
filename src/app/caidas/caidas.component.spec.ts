import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaidasComponent } from './caidas.component';

describe('CaidasComponent', () => {
  let component: CaidasComponent;
  let fixture: ComponentFixture<CaidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
