import { Component, OnInit } from "@angular/core";
import { Sku } from "../../models/sku";
import { DataService } from "../../services/data.service";
//import { SlimLoadingBarService } from "ng4-slim-loading-bar";

@Component({
  selector: "app-sku-list",
  templateUrl: "./sku-list.component.html",
  styleUrls: ["./sku-list.component.css"]
})
export class SkuListComponent implements OnInit {
  skus: Sku[];
  constructor(
    public dataService: DataService,
  //  private slimLoadingBarService: SlimLoadingBarService
  ) {}

  ngOnInit() {
  //  this.slimLoadingBarService.start();
    try {
      this.skus = this.dataService.getSkus();
    } catch (error) {}

   // this.slimLoadingBarService.complete();
  }

  addSku(sku: Sku) {
    this.dataService.addSku(sku);
  }
}
