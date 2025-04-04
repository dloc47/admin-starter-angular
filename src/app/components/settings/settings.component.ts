import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, User, Lock, Bell, Mail, Globe, Shield, HelpCircle, Save, Trash2, Download, Upload } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // Icons
  User = User;
  Lock = Lock;
  Bell = Bell;
  Mail = Mail;
  Globe = Globe;
  Shield = Shield;
  HelpCircle = HelpCircle;
  Save = Save;
  Trash2 = Trash2;
  Download = Download;
  Upload = Upload;

  // Active tab
  activeTab = 'profile';

  // Settings data
  userSettings = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Administrator',
    notifications: true,
    newsletter: false,
    language: 'English',
    timezone: 'UTC-5 (Eastern Time)',
    twoFactorAuth: false
  };

  constructor() { }

  ngOnInit() {
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  saveSettings() {
    // In a real application, this would save the settings to a backend
    console.log('Settings saved:', this.userSettings);
    // Show success message
    alert('Settings saved successfully!');
  }

  exportSettings() {
    // In a real application, this would export settings to a file
    console.log('Exporting settings...');
    alert('Settings exported successfully!');
  }

  importSettings() {
    // In a real application, this would import settings from a file
    console.log('Importing settings...');
    alert('Settings imported successfully!');
  }

  resetSettings() {
    // In a real application, this would reset settings to defaults
    if (confirm('Are you sure you want to reset all settings to default values?')) {
      this.userSettings = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Administrator',
        notifications: true,
        newsletter: false,
        language: 'English',
        timezone: 'UTC-5 (Eastern Time)',
        twoFactorAuth: false
      };
      alert('Settings reset to defaults!');
    }
  }
}
