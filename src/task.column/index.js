import ng from 'angular';
import 'angular-ui-sortable/dist/sortable';

import taskColumnDirective from './directive';

export default ng.module('taskColumn', ['ui.sortable'])
  .directive('taskColumn', taskColumnDirective)
  .name;
