import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponentComponent} from "./login-component/login-component.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {LayoutConHeaderComponent} from "./layout-con-header/layout-con-header.component";
import {LayoutRegisterComponent} from "./layout-register/layout-register.component";
import {main} from "@popperjs/core";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path: "", component:LayoutSinHeaderComponent,
  children: [
  {path: "", component:LoginComponentComponent},
      {path: "registro", component:LayoutRegisterComponent}
]},
  {path: "", component:LayoutConHeaderComponent,
  children: [
      {path: "main", component:MainComponent},
]} ,
    {path : "**", component:LoginComponentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
