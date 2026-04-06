import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-admin-page',
  imports: [RouterLink, RouterModule],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage {
  routeList=[
    {label: "Lista de Produtos", link: "/product-list"},
    {label: "Registrar Produtos", link: "/register"}
    
  ]
}
