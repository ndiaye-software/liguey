import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path :'',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./pages/main/home/home.component').then((m)=>m.HomeComponent)
        }
    },
    {
        path :'contact',
        loadComponent: () => {
            return import('./pages/main/contact/contact.component').then((m)=>m.ContactComponent)
        }
    },
    {
        path :'à-propos',
        loadComponent: () => {
            return import('./pages/main/about-us/about-us.component').then((m)=>m.AboutUsComponent)
        }
    },
    {
        path :'candidat',
        loadComponent: () => {
            return import('./pages/candidat/home/home.component').then((m)=>m.HomeComponent)
        }
    },
    {
        path :'candidat/profil',
        loadComponent: () => {
            return import('./pages/candidat/profile/profile.component').then((m)=>m.ProfileComponent)
        }
    },
    {
        path :'candidat/candidature',
        loadComponent: () => {
            return import('./pages/candidat/applications/applications.component').then((m)=>m.ApplicationsComponent)
        }
    },
    {
        path :'recruteur',
        loadComponent: () => {
            return import('./pages/recruiter/home/home.component').then((m)=>m.HomeComponent)
        }
    },
    {
        path :'recruteur/profil',
        loadComponent: () => {
            return import('./pages/recruiter/profile/profile.component').then((m)=>m.ProfileComponent)
        }
    },
    {
        path :'recruteur/offre',
        loadComponent: () => {
            return import('./pages/recruiter/offer/offer.component').then((m)=>m.OfferComponent)
        }
    }
];
