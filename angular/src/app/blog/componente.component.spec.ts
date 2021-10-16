import { ComponentFixture, TestBed } from '@angular/core/testing';

import { blogComponent } from './componente.component';

describe('blogComponent', () => {
  let component: blogComponent;
  let fixture: ComponentFixture<blogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ blogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(blogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
