import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruzetaComponent } from './cruzeta.component';

describe('CruzetaComponent', () => {
  let component: CruzetaComponent;
  let fixture: ComponentFixture<CruzetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CruzetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruzetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
