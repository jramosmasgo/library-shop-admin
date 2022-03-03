import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";
import { Login } from "src/app/shared/models/auth/login.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  userCredentials: Login = {} as Login;
  progessBarMode: boolean = false;

  formLogin: FormGroup = this.formBuilder.group({
    email: [
      "",
      [Validators.required, Validators.email, Validators.maxLength(50)]
    ],
    password: ["", [Validators.required, Validators.maxLength(20)]]
  });

  ngOnInit(): void {}

  login(): void {
    this.userCredentials = { ...this.formLogin.value };
    this.progessBarMode = true;
    this.authService.login(this.userCredentials).subscribe({
      next: (res) => {
        localStorage.setItem("user", res.data.id);
        localStorage.setItem("authToken", res.data.jwToken);
      },
      error: (err) => console.log(err),
      complete: () => (this.progessBarMode = false)
    });
  }
}
