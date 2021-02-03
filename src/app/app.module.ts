import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DataTableComponent } from './data-table/data-table.component';
// import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
// import { allIcons } from 'ngx-bootstrap-icons';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxBootstrapIconsModule,
    // allIcons,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
