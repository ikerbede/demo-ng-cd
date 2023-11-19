import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CdContainerComponent } from './cd-container.component';

describe('CdContainerComponent', () => {
  let component: CdContainerComponent;
  let fixture: ComponentFixture<CdContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CdContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
