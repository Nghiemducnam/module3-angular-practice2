import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {Routes, RouterModule} from '@angular/router';
const routesConfig : Routes = [
  {path: 'contact', component: ContactsComponent},
  {path: 'detail', component: ContactDetailComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ContactsComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
