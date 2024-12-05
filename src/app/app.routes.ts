import { Routes } from '@angular/router';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';
import { CreateUserPageComponent } from './components/create-user-page/create-user-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListPageComponent },
  { path: 'create-user', component: CreateUserPageComponent },
];