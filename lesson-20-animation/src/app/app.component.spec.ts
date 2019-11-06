/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: CompleteGuideFinalWebpack', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  });


  it('should create the app', async(() => {

    expect(component).toBeTruthy();
  }));


  it(`should have as title 'app works!'`, async(() => {

    expect(component.title).toBe('app works!');
  }));


  it('should render title in a h1 tag', () => {
    let h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();

    expect(h1.textContent).toContain(component.title);
  });
});
