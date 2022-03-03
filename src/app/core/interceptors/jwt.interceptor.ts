import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwtUser = localStorage.getItem("authToken");

    let cloneRequest = req;

    if (jwtUser) {
      cloneRequest = req.clone({
        setHeaders: { authorization: `Bearer ${jwtUser}` }
      });
    }

    return next.handle(cloneRequest);
  }
}
