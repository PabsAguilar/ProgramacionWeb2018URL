import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SkuListComponent } from "./components/sku-list/sku-list.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "sku-crud",
    component: SkuListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
