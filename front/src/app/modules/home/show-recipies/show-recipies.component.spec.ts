import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecipiesComponent } from './show-recipies.component';

describe('ShowRecipiesComponent', () => {
  let component: ShowRecipiesComponent;
  let fixture: ComponentFixture<ShowRecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRecipiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
