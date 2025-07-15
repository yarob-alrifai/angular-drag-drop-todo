import { Component, inject, Signal } from '@angular/core';
import { CdkDragDrop, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from '../../core/services/todo.service';
import { TodoAddComponent } from './todo-add/todo-add.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CdkDropListGroup, TodoListComponent, TodoAddComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoService = inject(TodoService);
  todo: Signal<string[]> = this.todoService.getTodoList();
  waiting: Signal<string[]> = this.todoService.getWaitingList();
  done: Signal<string[]> = this.todoService.getDoneList();

  drop(event: CdkDragDrop<string[]>) {
    this.todoService.handleDrop(event);
    console.log('Todo:', this.todo());
    console.log('Waiting:', this.waiting());
    console.log('Done:', this.done());
  }
}
