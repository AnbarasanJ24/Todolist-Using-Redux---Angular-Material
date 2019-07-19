import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store';
import { NgRedux, select} from '@angular-redux/store';
import { REMOVE_ALL_TODO } from '../actions';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})

export class TodoDashboardComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;

  constructor(private ngRegex : NgRedux<IAppState>) {}
  ngOnInit() {}

  removeAllTodo(){
    this.ngRegex.dispatch({type : REMOVE_ALL_TODO});
  }

}
