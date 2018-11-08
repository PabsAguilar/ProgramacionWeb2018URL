import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Sku } from "../models/sku";

@Component({
  selector: "app-sku-crud",
  templateUrl: "./sku-crud.component.html",
  styleUrls: ["./sku-crud.component.css"]
})
export class SkuCRUDComponent implements OnInit {

  // @Output() skuAdded  = new EventEmitter<Sku>();
  // sku: string;
  // description: string;
  // createDate: NgbDateStruct;
  // image: string;
  // family: string;
  // hide: boolean;

  // // It maintains registration form display status. By default it will be false.
  // showNew: Boolean = false;
  // // It will be either 'Save' or 'Update' based on operation.
  // submitType = "Save";
  // // It maintains table row index based on selection.
  // selectedRow: number;
  // // It maintains Array of countries.
  // families: string[] = ["Electronic", "House", "Detergent", "Dairy"];

  // closeResult: string;

  constructor(private modalService: NgbModal) {}

  // // This method associate to New Button.
  // onNew() {
  //   this.skuAdded({
  //     sku: this.sku,
  //     description: this.description,
  //     createDate: this.createDate,
  //     image: this.image,
  //     family: this.family,
  //     hide: false,
  //   });
  //   // Change submitType to 'Save'.
  //   this.submitType = "Save";
  //   // display registration entry section.
  //   this.showNew = true;
  // }

  // open(content) {

  //   this.modalService
  //     .open(content, { ariaLabelledBy: "modal-basic-title" })
  //     .result.then(
  //       result => {
  //         this.closeResult = `Closed with: ${result}`;
  //       },
  //       reason => {
  //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //       }
  //     );
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return "by pressing ESC";
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return "by clicking on a backdrop";
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  // onEdit(content, index: number) {
    
  //   this.modalService
  //     .open(content, { ariaLabelledBy: "modal-basic-title" })
  //     .result.then(
  //       result => {
  //         this.closeResult = `Closed with: ${result}`;
  //       },
  //       reason => {
  //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //       }
  //     );
  // }

  // onDelete(index: number) {}

  // onCancel() {}

  ngOnInit() {}

  // onChangeCountry(family: string) {
  //   // Assign corresponding selected country to model.
  //   //this.regModel.family = family;
  // }
}
