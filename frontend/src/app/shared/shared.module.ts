import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { CleanerPipe } from './pipes/cleaner.pipe';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from  'ngx-pagination';

 


@NgModule({
  declarations: [
    FilterPipe, 
    CleanerPipe,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule

          

  ],

  providers:[],  
  
  exports:[
    FilterPipe,
    CleanerPipe,
    SelectComponent,
    NgxPaginationModule,

   
  ]
})
export class SharedModule { }
