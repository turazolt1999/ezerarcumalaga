import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-videoupload',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  templateUrl: './videoupload.component.html',
  styleUrl: './videoupload.component.scss'
})
export class VideouploadComponent {
  fb = inject(FormBuilder);
  
  form = this.fb.nonNullable.group({
  })

  onSubmit(): void {

  }
}
