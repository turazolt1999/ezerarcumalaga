import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StorageService } from '../services/storage.service';
import { SafeUrlModule } from '../models/safe-url.module'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    SafeUrlModule
  ]
})
export class HomeComponent {
  storageService = inject(StorageService);

  youtubeLinks: string[] = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
    'https://www.youtube.com/watch?v=L_jWHffIx5E'
  ];

  ngOnInit(): void {
    // this.storageService.fileList();
  }
}
