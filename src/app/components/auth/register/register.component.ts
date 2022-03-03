import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import { Register } from "src/app/shared/models/auth/register.model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styles: []
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  dataRegister: Register = {} as any;
  progressBar: boolean = false;

  formRegister: FormGroup = this.formBuilder.group(
    {
      userName: ["", [Validators.required, Validators.maxLength(30)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      confirmPassword: ["", Validators.required]
    },
    {
      Validators: [this.validateEqualFields("password", "confirmPassword")]
    }
  );

  ngOnInit(): void {}

  register(): void {
    this.dataRegister = { ...this.formRegister.value };
    console.log(this.dataRegister);
  }

  validateEqualFields(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(field1)?.value;
      const confirmPassword = formGroup.get(field2)?.value;

      if (password !== confirmPassword) {
        formGroup.get(field2)?.setErrors({ noEquals: true });
        return { noEquals: true };
      }

      formGroup.get(field2)?.setErrors(null);

      return null;
    };
  }
}
