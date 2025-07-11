import {Component} from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  CdkDragPlaceholder,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  standalone: true,
   imports: [CdkDropListGroup, CdkDropList, CdkDrag,CdkDragPlaceholder],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  wating :string[]= [];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    console.log(this.todo)
  }
}