import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { Task } from './../task';
import * as moment from 'moment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task = new Task();

  @Output() save = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    console.log('save emit');
    console.log(this.task);
    this.task.date = moment(this.task.date).format('DD/MM/YYYY');
    this.task.done = false;
    this.save.emit(this.task);
  }

}
