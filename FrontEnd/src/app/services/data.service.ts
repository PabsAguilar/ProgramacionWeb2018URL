import { Injectable } from "@angular/core";
import { Sku } from "../models/sku";
import { ApiService } from "../services/api.service";
import { HttpClient } from "@angular/common/http";
import { Configuration } from "../app.constants";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  skus: Sku[];
  constructor(
    private configuration: Configuration,
    private http: HttpClient,
    private api: ApiService
  ) {
    this.skus = [];
  }
  getSkus() {
    this.api.getAll<Sku[]>().subscribe(
      (data: Sku[]) => {
        data.forEach(x => {
          this.skus.push(x);
        });
      },
      error => () => {
        //      this.toasterService.pop("error", "Damn", "Something went wrong...");
      },
      () => {}
    );
    return this.skus;
  }

  addSku(sku: Sku) {
    this.api.add(sku).subscribe(
      (data: any) => {
        console.log(data);
        sku._id = data.sku._id;
      },
      error => () => {
        //      this.toasterService.pop("error", "Damn", "Something went wrong...");
      },
      () => {
        this.skus.push(sku);
      }
    );
  }

  UpdatedItem(newItem: Sku): void {
    this.api.update(newItem._id, newItem).subscribe(
      (data: any[]) => {
        console.log(data);
      },
      error => () => {
        return false;
        //      this.toasterService.pop("error", "Damn", "Something went wrong...");
      },
      () => {
        return true;
      }
    );
  }

  deleteSku(sku: Sku) {
    this.api.delete(sku._id).subscribe(
      (data: any[]) => {
        console.log(data);
      },
      error => () => {
        //      this.toasterService.pop("error", "Damn", "Something went wrong...");
      },
      () => {}
    );
  }
}
