import ng from 'angular';
import taskMainDirective from './directive';

export default ng.module('taskMain', [])
  .directive('taskMain', taskMainDirective)
  .name;
