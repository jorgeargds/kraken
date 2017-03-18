
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent }   from './sales.component';
import { InventoryComponent } from './inventory.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: SalesComponent },
  { path: 'inventory',  component: InventoryComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
