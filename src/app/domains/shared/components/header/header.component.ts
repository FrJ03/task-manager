import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit{
  title: string  = ''
  @Output() addTask = new EventEmitter<string>()

  constructor(){
    console.log(typeof this.addTask)
  }

  addTasKHandler(){
    this.addTask.emit(this.title)
    this.title = ''
  }
  ngOnInit(): void {
    
  }
}
