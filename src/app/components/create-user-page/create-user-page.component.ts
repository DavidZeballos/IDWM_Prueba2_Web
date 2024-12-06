import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-create-user-page',
  standalone: true,
  imports: [NgIf, FormsModule],
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

    // Validación del campo "nombre"
    if (!this.user.name || this.user.name.length < 3 || this.user.name.length > 20) {
      this.error = 'El nombre debe tener entre 3 y 20 caracteres.';
      return;
    }

    // Validación del campo "correo electrónico"
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.user.email || !emailPattern.test(this.user.email)) {
      this.error = 'El correo electrónico debe ser válido.';
      return;
    }

    // Validación del campo "fecha de nacimiento"
    const birthDate = new Date(this.user.birthDate);
    const today = new Date();
    if (!this.user.birthDate || isNaN(birthDate.getTime()) || birthDate >= today) {
      this.error = 'La fecha de nacimiento debe ser válida y anterior a la fecha actual.';
      return;
    }

    // Validación del campo "género"
    const validGenders = ['Femenino', 'Masculino', 'Prefiero no decirlo', 'Otro'];
    if (!this.user.gender || !validGenders.includes(this.user.gender)) {
      this.error = 'El género debe ser uno de los valores permitidos.';
      return;
    }

    // Si todas las validaciones pasan, enviar la petición
    this.userService.createUser(this.user).subscribe({
      next: () => {
        this.message = 'Usuario creado con éxito.';
      },
      error: (err) => {
        if (typeof err.error === 'string') {
          this.error = err.error;
        } else {
          this.error = 'Ocurrió un error inesperado.';
        }
      },
    });
  }
}
