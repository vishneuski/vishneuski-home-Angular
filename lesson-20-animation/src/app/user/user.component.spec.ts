/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';
import { DebugElement } from '@angular/core';

describe('Component: User', () => {

  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let el: DebugElement;
  let userService: UserService;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        {provide: UserService, useClass: UserService},
        {provide: DataService, useClass: DataService}
      ]
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    userService = el.injector.get(UserService);
    dataService = el.injector.get(DataService);
  });

  it('should create the app', () => {

    expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    component.ngOnInit();

    expect(component.user).toEqual(userService.user);
  });

  it('should display the user name if user is logged in', () => {
    component.ngOnInit();
    fixture.detectChanges();
    let par = fixture.nativeElement.querySelector('p');
    if (component.isLoggedIn) {

      expect(par.textContent).toContain(component.user.name);
    }
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    component.ngOnInit();
    fixture.detectChanges();
    let par = fixture.nativeElement.querySelector('p');
    if (!component.isLoggedIn) {

      expect(par.textContent).not.toContain(component.user.name);
    }
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    spyOn(dataService, 'getDetails').and.callThrough();
    component.ngOnInit();

    expect(dataService.getDetails).toHaveBeenCalled();
    expect(component.data).toBeUndefined();
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    // by using whenStable()
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(component.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    // by using tick()
    fixture.detectChanges();
    tick(1500);

    expect(component.data).toBe('Data');
  }));
});
