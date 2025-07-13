import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TodoListComponent } from './todo-list/todo-list.component';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CdkDropListGroup, TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  waiting: string[] = [];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log('Todo:', this.todo);
    console.log('Waiting:', this.waiting);
    console.log('Done:', this.done);
  }
}
