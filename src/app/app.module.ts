import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { TasksFooterComponent } from './domains/shared/components/tasks-footer/tasks-footer.component';
import { TasksListComponent } from './domains/tasks/components/tasks-list/tasks-list.component';
import { TaskComponent } from './domains/tasks/components/task/task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TasksFooterComponent,
    TasksListComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
