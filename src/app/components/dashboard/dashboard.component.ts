import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  protected readonly DollarSign = DollarSign;
  protected readonly Users = Users;
  protected readonly ShoppingCart = ShoppingCart;
  protected readonly TrendingUp = TrendingUp;

  constructor() { }

  ngOnInit() {
  }
}
