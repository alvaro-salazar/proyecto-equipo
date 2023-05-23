import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaisComponent } from './create-pais.component';

describe('CreatePaisComponent', () => {
  let component: CreatePaisComponent;
  let fixture: ComponentFixture<CreatePaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
