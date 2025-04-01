import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/domains/shared/components/model/task.model';
import { TaskStorageService } from 'src/app/domains/shared/services/task-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  tasks: Task[] = []
  currentFilter: string = 'all'

  constructor(private readonly route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.route.url.subscribe(params => {
        if(params[0]){
          this.currentFilter = params[0].path
        }
      }
    )
    this.tasks = this.taskStorageService.getTasks()
  }

  taskStorageService = inject(TaskStorageService)

  onUpdate(){
    this.taskStorageService.setTasks(this.tasks)
    this.tasks = this.taskStorageService.getTasks()
  }

  cleanCompletedTasks(){
    this.taskStorageService.setTasks(this.getPendingTaks())
    this.tasks = this.taskStorageService.getTasks()
  }

  addTask(title: string){
    if(title !== ''){
      let new_id = 1
      if(this.tasks.length !== 0) {
        new_id = parseInt(this.tasks[this.tasks.length - 1].id) + 1
      }
      this.taskStorageService.addTask({
        id: new_id.toString(),
        title: title.trim(),
        completed: false
      })
      this.tasks = this.taskStorageService.getTasks()
    }
  }

  getPendingTaks(): Task[]{
    return this.tasks.filter(task => !task.completed)
  }
  getCompletedTaks(): Task[]{
    return this.tasks.filter(task => task.completed)
  }

  getTasks(): Task[]{
    if(this.currentFilter === 'all'){
      return this.tasks
    } else if (this.currentFilter === 'pending'){
      return this.tasks.filter(task => !task.completed)
    } else {
      return this.tasks.filter(task => task.completed)
    }
  }
}
