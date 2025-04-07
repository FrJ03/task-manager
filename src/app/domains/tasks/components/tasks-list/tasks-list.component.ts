import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/domains/shared/components/model/task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent{
  @Input() tasks: Task[] = []
  @Output() update = new EventEmitter<void>()
  @Output() delete = new EventEmitter<string>()

  updateTaskHandler(){
    this.update.emit()
  }
  
  deleteTaskHandler(taskId: string){
    this.delete.emit(taskId)
  }
}
