import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../../core/services/todo.service';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss',
})
export class TodoAddComponent {


  todoDataService = inject(TodoService)
profileForm = new FormGroup({
    description: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });
 onSubmit() {
    if (this.profileForm.valid) {
      const description = this.profileForm.value.description as string;
      this.todoDataService.addTodoItem(description)
      this.profileForm.reset(); // Clear form after submission
    }
  }
}
