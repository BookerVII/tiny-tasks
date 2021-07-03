import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';
import {MatIcon} from '@angular/material/icon';

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

  @Output() deleted: EventEmitter<Task> = new EventEmitter();
  @Output() updated: EventEmitter<Task> = new EventEmitter();
  @Output() donesky: EventEmitter<Task> = new EventEmitter();

  constructor(@Inject('TaskService') private taskService: TaskService) { }

  delete(task: Task): void {
    this.taskService.delete(task.id).subscribe(() => {
      this.deleted.emit(task);
    });
  }


  done(task: Task): Task {
    const toggleDone = !task.done;
    const modified = Date.now().toLocaleString();
    this.taskService.done(task.id, toggleDone, modified ).subscribe(() => {
      this.donesky.emit(task);
    });
    return task;
  }

  edit(task: Task): Task {
    const modified = Date.now().toLocaleString();
    const name = '';
    const dueDate = '';
    this.taskService.edit(task.id, name, dueDate, modified ).subscribe(() => {

    });
    return task;
  }

}

