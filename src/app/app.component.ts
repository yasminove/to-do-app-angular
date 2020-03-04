import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  // @Input() :newTodo

addTodo(newTodo){

  // this.todos.push(newTodo)
  // console.log(newTodo);

  // console.log('clicked');
  // this.todos.push( {id:6, name: 'Pay bills', isComplete: 'no'})
  if(newTodo){

    // newTodo ={id:'', name:newTodo, isComplete:'no'}
  let newTodoObj = new AppComponent()
newTodoObj.name = newTodo

    this.todos.push(newTodoObj)
    console.log(newTodoObj, 'todo');
  }
}


id;
name;
isComplete;

  todos = [
    {id:1, name: 'Hit the gym', isComplete: 'yes'},
    {id:2, name: 'Meet George', isComplete: 'yes'},
    {id:3, name: 'Buy eggs', isComplete: 'no'},
    {id:4, name: 'Read a book', isComplete: 'no'},
    {id:5, name: 'Organize office', isComplete: 'yes'},
    {id:6, name: 'Pay bills', isComplete: 'no'}
];



delete(todo){
  console.log('hii');
  console.log(todo);
  var list = document.getElementById("li");
  list.parentNode.removeChild(list);
}

}
