import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TaskListCompletedComponent } from './task-list-completed/task-list-completed.component';

@NgModule({
  declarations: [TaskFormComponent, TaskListComponent, TaskListCompletedComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [TaskFormComponent, TaskListComponent, TaskListCompletedComponent]
})
export class TasksModule { }
