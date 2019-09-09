import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickButtonLogComponent } from './click-button-log.component';

describe('ClickButtonLogComponent', () => {
  let component: ClickButtonLogComponent;
  let fixture: ComponentFixture<ClickButtonLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickButtonLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickButtonLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
