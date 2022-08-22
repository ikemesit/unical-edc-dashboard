import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

const FUSE_MODULES = [FuseDrawerModule];

const MAT_MODULES = [
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatRippleModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...MAT_MODULES,
        ...FUSE_MODULES,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...MAT_MODULES,
        ...FUSE_MODULES,
    ],
})
export class SharedModule {}
