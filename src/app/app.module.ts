import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuModule} from 'primeng/menu';
import {PanelModule} from 'primeng/panel';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    PanelModule,
    MenubarModule,
    PanelMenuModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    ListboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
