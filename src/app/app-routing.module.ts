import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { DirectoryComponent } from './directory/directory.component';
import { InfotactComponent } from './infotact/infotact.component';

const routes: Routes = [
  {
    path: '',
    component: InfotactComponent,
  },
  {
    path: 'directory',
    component: DirectoryComponent,
  },
  {
    path: 'add-contact',
    component: AddContactComponent,
  },
  {
    path: 'delete-contact',
    component: DeleteContactComponent,
  }
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
