import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlanLogsComponent } from './user-logs/alan-logs/alan-logs.component';
import { EricLogsComponent } from './user-logs/eric-logs/eric-logs.component';
import { KevinLogsComponent } from './user-logs/kevin-logs/kevin-logs.component';
import { TylerLogsComponent } from './user-logs/tyler-logs/tyler-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlanLogsComponent,
    EricLogsComponent,
    KevinLogsComponent,
    TylerLogsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
