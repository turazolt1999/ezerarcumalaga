import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ezerarcumalaga';
  authService = inject(AuthService);
  router = inject(Router);
  isLoading = true;

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.authService.currentUsersig.set({
          email: user.email!,
          username: user.displayName!
        })
      } else {
        this.authService.currentUsersig.set(null);
      }
      this.isLoading = false;
    })
  }

  logout(): void {
    this.authService.logout();
  }

  videoUpload(): void {
    this.router.navigateByUrl('/video_upload');
  }
}
