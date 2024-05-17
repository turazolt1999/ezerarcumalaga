import { Injectable, inject, signal } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from "@angular/fire/auth";
import { Observable, from } from "rxjs";
import { UserInterface } from "../models/user.interface";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private loggedIn: boolean = false;

    firebaseAuth = inject(Auth)
    user$ = user(this.firebaseAuth)
    currentUsersig = signal<UserInterface | null | undefined>(undefined)
    router: any;

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
        ).then(() => {
            this.loggedIn = true;
        });
        return from(promise);
    }

    logout(): Observable <void> {
        const promise = signOut(this.firebaseAuth);
        this.loggedIn = false;
        return from(promise);
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }
}