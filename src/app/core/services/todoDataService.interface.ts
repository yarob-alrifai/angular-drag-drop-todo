export interface ITodoDataService {
  getTodoList(): string[];
  getWaitingList(): string[];
  getDoneList(): string[];
}
