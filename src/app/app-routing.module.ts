import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import {UploadComponent} from './upload/upload.component';
// import {BaseScenarioComponent} from './base-scenario/base-scenario.component';
// import {NewScenarioComponent} from './new-scenario/new-scenario.component';
// import {CompareScenarioComponent} from './compare-scenario/compare-scenario.component';
// import {SidebarComponent } from './sidebar/sidebar.component';



const routes: Routes = [
  
  { path: 'upload', component:UploadComponent},
  { path: 'baseScenario',component:SidebarComponent},
  { path: 'newScenario', component:SidebarComponent},
  { path: 'compareScenario', component:SidebarComponent},
  { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
