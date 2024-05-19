import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-videoupload',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './videoupload.component.html',
  styleUrls: ['./videoupload.component.scss']
})
export class VideouploadComponent {
  fb = inject(FormBuilder);
  
  form = this.fb.nonNullable.group({
    video: [null as File | null, Validators.required] // Modify type to accept File or null
  });

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.form.patchValue({ video: file });
      this.form.get('video')!.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = new FormData();
      const videoFile = this.form.get('video')!.value;

      if (videoFile) {
        formData.append('video', videoFile);
        // Handle form submission, e.g., send formData to your backend
        console.log(formData);
      } else {
        console.error("No video file selected");
      }
    }
  }
}
