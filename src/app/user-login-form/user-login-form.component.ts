import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-component',
  standalone: true,
  imports: [],
  templateUrl: './user-login-form.component.html',
  styleUrl: './user-login-form.component.scss'
})
export class UserLoginComponentComponent {
  constructor(private router: Router) { }

  navigateToMovies(): void {
    this.router.navigate(['movies']);
  }
}
