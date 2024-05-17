import { Injectable, inject, signal } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, user } from "@angular/fire/auth";
import { Observable, from } from "rxjs";
import { UserInterface } from "./user.interface";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    firebaseAuth = inject(Auth)
    user$ = user(this.firebaseAuth)
    currentUsersig = signal<UserInterface | null | undefined>(undefined)

    register(
        email: string, username: string, password: string
    ): Observable<void> {
        const promise = createUserWithEmailAndPassword(
            this.firebaseAuth, email, password
        ).then((res) => {
            updateProfile(res.user, { displayName: username })
        });
        return from(promise);
    }

    login(
        email: string, password: string
    ): Observable <void> {
        const promise = signInWithEmailAndPassword(
            this.firebaseAuth,
            email,
            password
        ).then(() => {});
        return from(promise);
    }
}