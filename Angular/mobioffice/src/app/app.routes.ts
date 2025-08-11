// example: apps/mobi-fix-pro-ui/src/app/master/master.module.ts (or appropriate module)
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
// ... other modules
import { InventoryListComponent } from './inventory/inventory-list.component';

@NgModule({
  declarations: [InventoryListComponent /* or add to exports if needed */],
  imports: [CommonModule, FormsModule, MatIconModule, MatMenuModule /* etc */],
})
export class MasterModule {
    { path: 'leave-summary', component: InventoryListComponent }

}
