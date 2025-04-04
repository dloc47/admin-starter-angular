import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, LayoutDashboard, Home, Settings, LogOut } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, LucideAngularModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isCollapsed = false;
  @Output() collapsedChange = new EventEmitter<boolean>();
  
  // Icons
  LayoutDashboard = LayoutDashboard;
  Home = Home;
  Settings = Settings;
  LogOut = LogOut;
  
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed);
  }
}
