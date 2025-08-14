import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataService, Program, User } from '../services/data.service';
import { HeaderComponent } from '../header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, HeaderComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  user = {
    name: '',
    level: '',
    avatar: ''
  };

  programs = signal<Program[]>([]);


  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPrograms().subscribe(data => {
      this.programs.set(data);
      console.log(data);
    });

    this.dataService.getUsers().subscribe((users: User[]) => {
      const userData = users.find(user => user.id === '5GznHK79G8yMhNy48wsJ') || users[0];
      if (userData) {
        this.user = {
          name: userData.name,
          level: userData.level,
          avatar: userData.avatar
        };
      } else {
        this.user = {
          name: 'Guest',
          level: '',
          avatar: 'assets/images/avatar.jpg'
        };
      }
    });
  }
}