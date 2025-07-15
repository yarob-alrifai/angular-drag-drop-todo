import { Signal } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

export interface ITodoService {
  getTodoList(): Signal<string[]>;
  getWaitingList(): Signal<string[]>;
  getDoneList(): Signal<string[]>;
  handleDrop(event: CdkDragDrop<string[]>): void;
  addTodoItem(description: string): void;
}
