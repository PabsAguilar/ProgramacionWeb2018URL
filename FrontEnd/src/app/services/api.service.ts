import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Configuration } from "../app.constants";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.serverWithApiUrl + "sku/";
  }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl);
  }

  public getSingle<T>(id: number): Observable<T> {
    return this.http.get<T>(this.actionUrl + id);
  }

  public add<T>(object: any): Observable<T> {
    return this.http.post<T>(this.actionUrl, object);
  }

  public update<T>(id: string, itemToUpdate: any): Observable<T> {
    return this.http.put<T>(this.actionUrl + id, itemToUpdate);
  }

  public delete<T>(id: string): Observable<T> {
    return this.http.delete<T>(this.actionUrl + id);
  }
}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set("Content-Type", "application/json")
      });
    }

    req = req.clone({ headers: req.headers.set("Accept", "application/json") });
    return next.handle(req);
  }
}
