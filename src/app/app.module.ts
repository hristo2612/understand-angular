import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { SearchDevelopersPipe } from './search-developers.pipe';
import { DeveloperDetailsComponent } from './developer-details/developer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperListComponent,
    SearchDevelopersPipe,
    DeveloperDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
