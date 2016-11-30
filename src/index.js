import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import ng from 'angular';
import './assets/styles/styles.css';
import taskService from './service';
import taskPanel from './task.panel';
import taskCard from './task.card';
import taskColumn from './task.column';
import taskMain from './task.main';
import boards from './boards'
import login from './login'
import navbar from './navbar'

ng.module('app', [navbar, boards, login, taskPanel, taskCard, taskColumn, taskMain])
  .service('taskService', taskService);
