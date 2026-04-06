import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(private router: Router) {}

  busca: string = '';

  produtos = [
    { nome: 'Homem Essence', img: "essence-removebg-preview.png" },
    { nome: 'Azzaro The Most Wanted', img: "azzaro-removebg-preview.png" },
    { nome: 'Le Male Le Parfum', img: "o.61856-removebg-preview.png" },
    { nome: 'Homem Sagaz', img: "o.48965-removebg-preview.png" },
    { nome: 'The Blend Bourbon', img: "61U5NZv08hL._AC_UF1000_1000_QL80_-removebg-preview.png" }
  ];

  resultados: any[] = [];

  filtrarProdutos() {
    this.resultados = this.produtos.filter(p =>
      p.nome.toLowerCase().includes(this.busca.toLowerCase())
    );
  }
  
  selecionarProduto(item: any) {
    console.log('clicou');
    this.router.navigate(['/produto']);
    this.busca = item.nome;
    this.resultados = [];
  }
  
}
