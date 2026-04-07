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
<<<<<<< HEAD
    {label: "Registrar Produtos", link: "/product-crud"}
=======
    {label: "Registrar Produtos", link: "/register"}
>>>>>>> 090fae2e12c271a966be3d123a379b2700ed4ede
    
  ]
}
