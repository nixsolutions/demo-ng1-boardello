import template from './template.html';
import controller from './controller';

export default () => ({
  restrict: 'E',
  template,
  controller,
  controllerAs: 'taskColumnController',
  scope: {
    deleteColumn: '&',
    column: '='
  },
  bindToController: true
});
