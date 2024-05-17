import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StorageService } from '../services/storage.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        MatCardModule,
        MatButtonModule
    ]
})
export class HomeComponent {
  storageService = inject(StorageService);

  ngOnInit(): void {
    this.storageService.fileList();
  }
}
