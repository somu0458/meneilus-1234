import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
// import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'sidenav', component:SideNavComponent},
  // {path:'dataTable', component:DataTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
