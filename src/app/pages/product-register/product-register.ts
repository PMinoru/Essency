import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-register',
  imports: [RouterModule, FormsModule],
  templateUrl: './product-register.html',
  styleUrl: './product-register.css',
})
export class ProductRegister {}