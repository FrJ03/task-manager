import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/domains/shared/components/model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent{
  @Input() task: Task | undefined
  @Output() update = new EventEmitter<void>()
  @Output() delete = new EventEmitter<string>()
  isEditing: boolean = false

  onChangeState(){
    if(this.task){
      this.task.completed = !this.task.completed
      this.update.emit()
    }
  }
  editMode(value: boolean){
    this.isEditing = value
  }
  onEdit(title: any){
    if(this.task){
      this.task.title = title.trim()
      this.update.emit()
    }
    this.isEditing = false
  }
  onDelete() {
    this.delete.emit(this.task?.id)
  }
  getClass(): string{
    if(this.isEditing){
      return "editing"
    } else if (this.task?.completed){
      return "completed"
    } else {
      return ""
    }
  }
}
