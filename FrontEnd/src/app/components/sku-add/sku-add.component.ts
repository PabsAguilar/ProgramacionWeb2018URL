import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Sku } from "../../models/sku";
import {
  NgbDateStruct,
  NgbModal,
  ModalDismissReasons
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-sku-add",
  templateUrl: "./sku-add.component.html",
  styleUrls: ["./sku-add.component.css"]
})
export class SkuAddComponent implements OnInit {
  sku: string;
  _id: string;
  description: string;
  createDate: NgbDateStruct;
  image: string;
  family: string;
  hide: boolean;
  showModal: boolean;
  families: string[] = ["Electronic", "House", "Detergent", "Dairy"];
  @Output()
  skuAdded = new EventEmitter<Sku>();

  constructor(private modalService: NgbModal) {
    this.showModal = true;
    this.family = "Choose Family";
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }
  ngOnInit() {}

  addTask() {
    this.skuAdded.emit({
      _id: this._id,
      sku: this.sku,
      description: this.description,
      createDate: new Date(),
      image: this.image,
      family: this.family,
      hide: true
    });
    this.modalService.dismissAll();
    this.sku = "";
    this.image = "";
    this.family = "";
    this.description = "";
  }
  editSku(sku: Sku) {
    alert("hola");
    this.family = sku.family;
    this.sku = sku.sku;
    this.image = sku.image;
    this.description = sku.description;
    //  const modalRef = this.modalService.open(SkuAddComponent);
  }
  onChangeFamily(family: string) {
    this.family = family;
  }
}
