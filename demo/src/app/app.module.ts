import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomComponent } from './custom/custom.component';

import {ShareButtonsModule} from './share';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ShareButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
