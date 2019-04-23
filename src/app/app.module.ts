import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule, 

    MatTableModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
