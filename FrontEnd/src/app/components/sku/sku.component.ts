import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Sku } from "../../models/sku";
import { DataService } from "../../services/data.service";
import { Content } from "@angular/compiler/src/render3/r3_ast";
import {
  NgbDateStruct,
  NgbModal,
  ModalDismissReasons
} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-sku",
  templateUrl: "./sku.component.html",
  styleUrls: ["./sku.component.css"]
})
export class SkuComponent implements OnInit {
  @Input("sku")
  sku: Sku;

  @Output()
  editSku = new EventEmitter<Sku>();

  families: string[] = ["Electronic", "House", "Detergent", "Dairy"];
  constructor(
    public dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}

  removeSku(sku: Sku) {
    if (confirm("Are you sure you want to delete this sku?")) {
      this.dataService.deleteSku(sku);
    }
  }

  updateSku(sku: Sku, content: Content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  updateTask() {
    this.dataService.UpdatedItem(this.sku);
    this.modalService.dismissAll();
  }

  onChangeFamily(family: string) {
    this.sku.family = family;
  }
}
