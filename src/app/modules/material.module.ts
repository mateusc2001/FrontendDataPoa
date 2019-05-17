import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
  } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatMenuModule,
      MatToolbarModule,
      MatButtonModule,
      MatTableModule,
      OverlayModule
    ]
  })
  export class MaterialModule { }
