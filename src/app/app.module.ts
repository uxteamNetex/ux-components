import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SidenavService } from './shared/services/sidenav.service';
import { TabsHeaderService } from './shared/services/tabs-header.service';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
