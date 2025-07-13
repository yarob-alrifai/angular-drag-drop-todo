import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, CdkDrag, CdkDropList, CdkDragPlaceholder } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag, CdkDragPlaceholder],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
 @Input() title: string = '';
  @Input() items: string[] = [];
  @Input() connectedTo: string[] = []; // IDs of connected drop lists
  @Output() dropEvent = new EventEmitter<CdkDragDrop<string[]>>();

  drop(event: CdkDragDrop<string[]>) {
    this.dropEvent.emit(event);
  }
}
