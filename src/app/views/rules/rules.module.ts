import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RulesComponent } from './rules.component';
import { RulesRoutingModule } from './rules-routing.module';

@NgModule({
  imports: [
    FormsModule,
    RulesRoutingModule,
  ],
  declarations: [ RulesComponent ]
})
export class RulesModule { }
