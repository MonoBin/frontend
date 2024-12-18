import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePasteComponent } from './create-paste.component';

describe('CreatePasteComponent', () => {
  let component: CreatePasteComponent;
  let fixture: ComponentFixture<CreatePasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePasteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
