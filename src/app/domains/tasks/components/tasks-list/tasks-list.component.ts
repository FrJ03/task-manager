import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/domains/shared/components/model/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent{
  @Input() tasks: Task[] = []
  @Output() update = new EventEmitter<void>()
  @Output() delete = new EventEmitter<void>()

  updateTaskHandler(){
    this.update.emit()
  }
  
  deleteTaskHandler(taskId: string){
    this.tasks.splice(this.tasks.findIndex(task => task.id === taskId), 1)
    this.delete.emit()
  }
}
