import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { Status } from "./model/status";
import { FormService } from "./form.service";
import { of } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent {
  public myForm: FormGroup;

  statuses: Status[] = [
    { id: 1, name: "Staible" },
    { id: 2, name: "Critical" },
    { id: 3, name: "Finished" }
  ];

  constructor(private formService: FormService) {
    this.myForm = new FormGroup({
      projectForm: new FormGroup({
        projectName: new FormControl(
          "",
          [Validators.required, this.nameValidator],
          [this.projectNamelValidator.bind(this)]
        ),
        mail: new FormControl("", [Validators.email, Validators.required]),
        projectStatus: new FormControl("", Validators.required)
      })
    });
  }

  nameValidator(control: AbstractControl) {
    const regexp = /\bTest\b/;
    const valid = regexp.test(control.value);
    if (valid) {
      return { projectName: true };
    } else {
      return null;
    }
  }

  projectNamelValidator(control: AbstractControl) {
    return this.formService.checkProjectName(control.value).pipe(
      map(res => {
        console.log(res);
        return res ? null : { isProjectNameAvailable: true };
      })
    );
  }

  submit() {
    console.log("Submit: ", this.myForm.value);
  }
}
