import{NgModule} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routesConfig : Routes = [
  {path: 'contact', component: ContactsComponent},
  {path: 'detail', component: ContactDetailComponent},
  {path: '', redirectTo: '/contact', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routesConfig)
  ],
  declarations: [
    ContactDetailComponent,
    ContactsComponent,
    PageNotFoundComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
