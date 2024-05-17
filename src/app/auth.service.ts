import { Injectable, inject } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, updateProfile } from "@angular/fire/auth";
import { Observable, from } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    firebaseAuth = inject(Auth)

    register(
        email: string, username: string, password: string
    ): Observable<void> {
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth, email, password
        ).then((res) => {
            updateProfile(res.user, { displayName: username })
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        return from(promise);
    }
}