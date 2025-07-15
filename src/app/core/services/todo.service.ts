import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { inject, Injectable, signal } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { ITodoService } from './todoService.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements ITodoService {
  #todoDataService = inject(TodoDataService);
  #todo = signal<string[]>(this.#todoDataService.getTodoList());
  #waiting = signal<string[]>(this.#todoDataService.getWaitingList());
  #done = signal<string[]>(this.#todoDataService.getDoneList());

  getTodoList() {
    return this.#todo;
  }

  getWaitingList() {
    return this.#waiting;
  }

  getDoneList() {
    return this.#done;
  }

  constructor() {
    this.#loadFromLocalStorage();
  }

  #getListsFromLocalStorage() {
    const todoData = localStorage.getItem('todo');
    const waitingData = localStorage.getItem('waiting');
    const doneData = localStorage.getItem('done');
    return { todoData, waitingData, doneData };
  }

  #updateListsFromLocal(
    todoData: string | null,
    waitingData: string | null,
    doneData: string | null,
  ): void {
    if (todoData) {
      this.#todo.set(JSON.parse(todoData));
    }
    if (waitingData) {
      this.#waiting.set(JSON.parse(waitingData));
    }
    if (doneData) {
      this.#done.set(JSON.parse(doneData));
    }
  }
  // Load data from localStorage if available
  #loadFromLocalStorage(): void {
    const { todoData, waitingData, doneData } =
      this.#getListsFromLocalStorage();
    this.#updateListsFromLocal(todoData, waitingData, doneData);
  }

  // Save data to localStorage
  #saveToLocalStorage(): void {
    localStorage.setItem('todo', JSON.stringify(this.#todo()));
    localStorage.setItem('waiting', JSON.stringify(this.#waiting()));
    localStorage.setItem('done', JSON.stringify(this.#done()));
  }

  public handleDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.#saveToLocalStorage();
  }

  // Add a new todo item
  public addTodoItem(description: string): void {
    if (description.trim()) {
      this.#todo.set([...this.#todo(), description.trim()]);
      this.#saveToLocalStorage();
    }
  }
}
