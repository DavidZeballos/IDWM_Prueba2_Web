import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-user-list-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css'],
})
export class UserListPageComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log('Usuarios obtenidos:', data);
        this.users = data;
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      },
    });
  }
}
