import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IResponseServer } from "src/app/shared/models/response/response";
import { Login } from "src/app/shared/models/auth/login.model";
import { UserLogin } from "src/app/shared/models/user/userLogin";
import { Register } from "src/app/shared/models/auth/register.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(credentials: Login): Observable<IResponseServer<UserLogin>> {
    const uri = `${environment.urlAuth}/authenticate`;
    return this.httpClient.post<IResponseServer<UserLogin>>(uri, credentials);
  }

  register(dataRegister: Register): Observable<IResponseServer<UserLogin>> {
    const uri = `${environment.urlAuth}/register`;
    return this.httpClient.post<IResponseServer<UserLogin>>(uri, dataRegister);
  }
}
