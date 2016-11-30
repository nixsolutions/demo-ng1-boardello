import ng from 'angular';
import taskCardDirective from './directive';

export default ng.module('taskCard', [])
  .directive('taskCard', taskCardDirective)
  .name;
