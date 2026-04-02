import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  itensMenu = [
    {label: 'Favoritos', link: '/favorites'},
    {label: 'Entrar', link: '/login'},
    {label: 'Meu Carrinho', link: '/cart'},
    {label: 'Página do Administrador', link: '/admin-page'}
  ];
}
