import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks-footer',
  templateUrl: './tasks-footer.component.html',
})
export class TasksFooterComponent {
  @Input() isVisible: boolean = true
  @Input() nPendingTasks: number = 0
  @Input() nCompletedTasks: number = 0
  @Output() cleanCompletedTasks = new EventEmitter<void>()
  @Input() currentFilter: string = ''

  cleanCompletedTasksHandler(){
    this.cleanCompletedTasks.emit()
  }

  selected(filter: string): string{
    return filter === this.currentFilter ? "selected" : ""
  }
}
