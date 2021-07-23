import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output} from '@angular/core';

import {Task} from '../task';
import {TaskService} from '../task.service';

/**
 * A list of done tasks
 */
@Component({
  selector: 'tiny-task-list-completed',
  templateUrl: './task-list-completed.component.html',
  styleUrls: ['./task-list-completed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListCompletedComponent  {

  @Input() tasks: Task[];
  @Output() deleted: EventEmitter<Task> = new EventEmitter<Task>();
  constructor(@Inject('TaskService') private taskService: TaskService) { }


  // @ts-ignore
  clear(): void {
    this.taskService.deleteCompleted().subscribe(() => {
      this.deleted.emit();
    });
    //  this should delete all completed tasks
  }

}
