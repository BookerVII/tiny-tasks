import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

/**
 * A list of tiny tasks.
 */
@Component({
  selector: 'tiny-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {

  @Input() tasks: Task[];
  // deleted eventemitter works
  @Output() deleted: EventEmitter<Task> = new EventEmitter();
  // these two dont for some reason
  @Output() updated: EventEmitter<Task> = new EventEmitter();
  @Output() donesky: EventEmitter<Task> = new EventEmitter();

  taskListEdit: FormGroup = new FormGroup({
    editedName: new FormControl('', Validators.required),
    dueDate: new FormControl('')
  });

  constructor(@Inject('TaskService') private taskService: TaskService) { }

  delete(task: Task): void {
    this.taskService.delete(task.id).subscribe(() => {
      this.deleted.emit(task);
    });
  }

  done(task: Task): Task {
    const toggleDone = !task.done;
    const modified = Date.now().toLocaleString();
    // tslint:disable-next-line:no-shadowed-variable
    this.taskService.done(task.id, toggleDone, modified ).subscribe(task => {
      this.deleted.emit(task);
    });
    return task;
  }

  edit(task: Task): Task {
    const modified = Date.now().toLocaleString();
    const name = this.taskListEdit.value.editedName;
    const dueDate = '';
    this.taskService.edit(task.id, name, dueDate, modified ).subscribe(() => {
      this.deleted.emit(task);
    });
    return task;
  }
}
