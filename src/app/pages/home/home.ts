import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  adicionarFavorito() {
  this.router.navigate(['/favorites']);
}


irParaProduto() {
  this.router.navigate(['/produto']);
}

  constructor(private router: Router) {}

  busca: string = '';


}
