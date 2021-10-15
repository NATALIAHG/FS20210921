import { ComponentFixture, TestBed } from '@angular/core/testing';
import { librosComponent } from './componente.component';

describe('LibrosComponent', () => {
  let component: librosComponent;
  let fixture: ComponentFixture<librosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ librosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(librosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
