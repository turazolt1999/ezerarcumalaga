import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { getStorage, ref, listAll } from '@angular/fire/storage';
import { Observable, from } from 'rxjs';
import { FileUpload } from '../models/file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  firebaseAuth = inject(Auth)


  fileList(): Observable<void> {
    const storage = getStorage();
    const listRef = ref(storage, 'videos');
    const promise = listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log(folderRef);
        });
        res.items.forEach((itemRef) => {
          console.log(itemRef);
        });
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
      return from(promise)
  }



}
