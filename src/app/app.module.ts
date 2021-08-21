import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DestinataireComponent } from './destinataire/destinataire.component';
import { ArticleComponent } from './article/article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RedirectionComponent } from './redirection/redirection.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {  AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';







const routes: Routes = [ 
{ path: 'login', component: LoginComponent },

{ path: 'inscription',component: RegisterComponent },
{ path: 'destinataire',component: DestinataireComponent },
{ path: 'article' ,component: ArticleComponent },
{ path: 'redirection',component: RedirectionComponent },
{ path: '', component: LoginComponent },

]


@NgModule({
  imports: [BrowserModule,ReactiveFormsModule, RouterModule.forRoot(routes),FormsModule, HttpClientModule,AngularFireModule.initializeApp(environment.firebase),AngularFirestoreModule,AngularFireAuthModule],
  declarations: [AppComponent, LoginComponent, RegisterComponent, DestinataireComponent, ArticleComponent, RedirectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}