import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent{
  title: string  = ''
  @Output() addTask = new EventEmitter<string>()

  addTasKHandler(){
    this.addTask.emit(this.title)
    this.title = ''
  }
}
