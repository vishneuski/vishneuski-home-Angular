import {Injectable} from "@angular/core";
import {of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable()
export class FormService {
  constructor() {
  }

  checkProjectName(name: string) {
    return of({isProjectNameAvailable: name !== "Test1"}).pipe(delay(2000));
  }
}
