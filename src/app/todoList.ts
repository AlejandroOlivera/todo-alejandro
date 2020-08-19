import { TodoItem } from './todoItem';

export class TodoList {
  constructor(public user: string, private todoitems: TodoItem[] = []) {
    //no statements required
  }

  get items(): readonly TodoItem[] {
    return this.todoitems;
  }

  addItem(task: string) {
    this.todoitems.push(new TodoItem(task));
  }
}
