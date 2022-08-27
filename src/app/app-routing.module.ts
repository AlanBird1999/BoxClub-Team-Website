import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlanLogsComponent } from './user-logs/alan-logs/alan-logs.component';
import { EricLogsComponent } from './user-logs/eric-logs/eric-logs.component';
import { KevinLogsComponent } from './user-logs/kevin-logs/kevin-logs.component';
import { TylerLogsComponent } from './user-logs/tyler-logs/tyler-logs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'user-logs',
    children: [
      { path: 'alan', component: AlanLogsComponent },
      { path: 'eric', component: EricLogsComponent },
      { path: 'kevin', component: KevinLogsComponent },
      { path: 'tyler', component: TylerLogsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
