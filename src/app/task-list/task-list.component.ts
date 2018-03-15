import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { PanelModule, SelectItem } from 'primeng/primeng';

import { Task } from './../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  displayDialog: boolean;

  sortOptions: SelectItem[];

  tasksObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {

    this.displayDialog = false;

    this.tasksObservable = this.getTasks('/tasks');
  }

  getTasks(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getTask(itemPath): Observable<any> {
    return this.db.object(itemPath).valueChanges();
  }



  showDialog() {
      this.displayDialog = true;
  }

  saveTask(task: Task) {
    this.displayDialog = false;
    this.createTask(task);
  }

  createTask(task: Task): void  {
    this.db.list('/tasks').push(task);
 }


 // Update an existing item
 /*
 updateTask(key: string, value: any): void {
   this.tasks.update(key, value)
     .catch(error => this.handleError(error))
 }
*/
}
