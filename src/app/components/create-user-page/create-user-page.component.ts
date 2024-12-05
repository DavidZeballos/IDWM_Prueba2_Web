import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-create-user-page',
  standalone: true,
  imports: [NgIf, FormsModule], // Declarar dependencias necesarias
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css'],
})
export class CreateUserPageComponent {
  user: User = {
    name: '',
    email: '',
    birthDate: '',
    gender: '',
  };

  today: string = new Date().toISOString().split('T')[0]; // Fecha máxima permitida
  message: string | null = null;
  error: string | null = null;


  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.message = null;
    this.error = null;

    this.userService.createUser(this.user).subscribe({
      next: (response) => {
        this.message = 'Usuario creado con éxito.';
      },
      error: (err) => {
        this.error = 'Error al crear usuario: ' + err.error;
      },
    });
  }
}
