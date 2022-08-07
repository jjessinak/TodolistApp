import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app';

  data: any;

  tasks: any;

  fetchData(): void {
    fetch('https://todolistbackend.azurewebsites.net/api/todofunc')
    .then(res => {
      console.log(res);
      
      this.tasks = res;
    })
  }

  addTask(text: string): void {
    if(text.length > 0) {
      this.tasks.push(text);
    }
  }

  deleteTask(taskText: string): void {
    this.tasks.splice(this.tasks.indexOf(taskText), 1);
  }
}
