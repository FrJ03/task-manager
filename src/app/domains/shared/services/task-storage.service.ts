import { Injectable } from '@angular/core';
import { Task } from '../components/model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  constructor() { }

  getTasks(): Task[]{
    const data = localStorage.getItem('mydayapp-angular')

    if(data){
      return JSON.parse(data)
    } else return []
  }

  addTask(task: Task){
    const currentTasks = this.getTasks()

    currentTasks.push(task)

    localStorage.setItem('mydayapp-angular', JSON.stringify(currentTasks))
  }
  setTasks(tasks: Task[]){
    localStorage.setItem('mydayapp-angular', JSON.stringify(tasks))
  }
  deleteTask(task: Task){
    let currentTasks = this.getTasks()

    currentTasks = currentTasks.filter(t => t !== task)

    localStorage.setItem('mydayapp-angular', JSON.stringify(currentTasks))
  }
}
