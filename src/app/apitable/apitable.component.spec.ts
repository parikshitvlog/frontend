import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApitableComponent } from './apitable.component';

describe('ApitableComponent', () => {
  let component: ApitableComponent;
  let fixture: ComponentFixture<ApitableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApitableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
