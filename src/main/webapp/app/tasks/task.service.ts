import { Observable } from 'rxjs';

import { Task } from 'app/tasks/task';

/**
 * Service interface for implementations that handle tiny tasks.
 */
export interface TaskService {

  /**
   * Returns the list of all tasks.
   *
   * @returns an `Observable` holding the list of tasks
   */
  getAll(): Observable<Task[]>;

  /**
   * Adds a new task to the list of tasks.
   *
   * @param name the task's name
   * @param done, default=false
   * @param dueDate due date if task
   * @param created when task is created
   * @param modified when task is modified
   * @returns an `Observable` holding the created task
   */
  create(name: string, done: boolean, dueDate: string, created: string, modified: string): Observable<Task>;

  /**
   * Removes the task with the given ID from the list of tasks.
   *
   * @param id the ID of the task to be removed
   * @returns an empty `Observable`
   */
  delete(id: string): Observable<void>;

  /**
   * Removes all tasks that are completed
   */
  deleteCompleted(): Observable<void>;

  /**
   * Updates the task with the given ID from the list of tasks
   * @param id of task
   * @param done boolean whether task is done
   * @param name of the task
   * @param dueDate due date if task
   * @param created when task is created
   * @param modified when task is modified
   * @return empty `Observable` //? not sure what that is
   */

  update(id: string, name: string, done: boolean, dueDate: string, created: string, modified: string): Observable<Task>;

  /**
   *  Updates the task done status from default: false to true
   *  @param id of the task
   *  @param toggleDone boolean state of done
   * @param modified when task is modified
   */
  done(id: string, toggleDone: boolean, modified: string): Observable<Task>;

  edit(id: string, name: string, dueDate: string, modified: string ): Observable<Task>;

}
