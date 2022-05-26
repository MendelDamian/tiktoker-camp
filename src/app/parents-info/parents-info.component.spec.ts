import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ParentsInfoComponent} from './parents-info.component';

describe('ParentsInfoComponent', () => {
  let component: ParentsInfoComponent;
  let fixture: ComponentFixture<ParentsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentsInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
