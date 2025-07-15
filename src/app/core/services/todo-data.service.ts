import { Injectable } from '@angular/core';
import { ITodoDataService } from './todoDataService.interface';

@Injectable({
  providedIn: 'root',
})


export class TodoDataService implements ITodoDataService {
  #todo:string[] = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  #waiting:string[] = [];
  #done:string[] = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];

  getTodoList() {
    return this.#todo;
  }

  getWaitingList() {
    return this.#waiting;
  }

  getDoneList() {
    return this.#done;
  }
}
