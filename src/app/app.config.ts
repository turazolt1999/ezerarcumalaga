import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyADdRn-ACCrRQeFN6JdeB5GJYoAX6_JMwE",
  authDomain: "ezerarcumalaga-a3e63.firebaseapp.com",
  projectId: "ezerarcumalaga-a3e63",
  storageBucket: "ezerarcumalaga-a3e63.appspot.com",
  messagingSenderId: "1082610016519",
  appId: "1:1082610016519:web:fa94343c7996f13341a5a2",
  measurementId: "G-78WME5GW4B"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage())
  ]
};
