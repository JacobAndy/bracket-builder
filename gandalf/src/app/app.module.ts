import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

//Component Imports
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { DiscoverComponent } from './discover/discover.component';

const appRoutes: Routes = [
  { path: 'discover', component: DiscoverComponent },
  { path: 'manage', component: UserManagementComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserManagementComponent,
    DiscoverComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    FlexLayoutModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
