import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ITodo } from 'src/app/shared/model/todointerface';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @ViewChild('todoItem')
  todoItemRef!: ElementRef<HTMLInputElement>
  @ViewChild('isCompleted')
  isCompleted!: ElementRef<HTMLSelectElement>


  constructor(private _uuidService: UuidService,
    private _SnackBar: SnackBarService
  ) { }
  isOnEditMode: boolean = false;
  private update_id!: string;
  todos: ITodo[] = [
    { id: "1", title: 'Learn Angular fundamentals', completed: true },
    { id: "2", title: 'Build a simple todo app', completed: false },
    { id: "3", title: 'Build a Simple Student app', completed: true }
  ];
  ngOnInit(): void {
  }


  //Add
  ontodoAdd() {
    let todoobj: ITodo = {
      id: this._uuidService.getUUID(),
      title: this.todoItemRef.nativeElement.value,
      completed: this.isCompleted.nativeElement.value === 'Completed'
    }
    console.log(todoobj)
    this.todos.unshift(todoobj)
    this.todoItemRef.nativeElement.value = '';
    this.isCompleted.nativeElement.value = '';
    this._SnackBar.openSnackBar(`The todo with ${todoobj.id} is Added Successfully`)

  }

  //Remove
  onRemoveTodo(todo: ITodo) {
    let getConfirm = confirm(`Are You Sure You want to Remove the item`);
    if (getConfirm) {
      let removeIndex = this.todos.findIndex(t => t.id === todo.id);
      this.todos.splice(removeIndex, 1);
      this._SnackBar.openSnackBar(`The  todo item with ${todo.id} is Removed successfully`)

    }
  }

  //Edit
  onTodoEdit(todo: ITodo) {
    this.update_id = String(todo.id);
    this.todoItemRef.nativeElement.value = todo.title;
    this.isCompleted.nativeElement.value = todo.completed ? 'Completed' : 'NotCompleted';
    this.isOnEditMode = true;
  }


  //update
  onUpdateTodo() {
    let getIndex = this.todos.findIndex(todo => todo.id === this.update_id);
    if (getIndex !== -1) {
      this.todos[getIndex].title = this.todoItemRef.nativeElement.value;
      this.todos[getIndex].completed = this.isCompleted.nativeElement.value === 'Completed';
      this.isOnEditMode = false;

      this.todoItemRef.nativeElement.value = '';
      this.isCompleted.nativeElement.value = '';

      this._SnackBar.openSnackBar(`Todo with ${this.update_id} is Updated Successfully`);
    }
  }

  onUpdateCheckbox(todo: ITodo) {
    todo.completed = !todo.completed;
    // console.log(this.todos);
    this._SnackBar.openSnackBar(`CheckBox is updated successfully`);
  }
}

