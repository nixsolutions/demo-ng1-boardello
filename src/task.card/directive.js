import template from './template.html';
import controller from './controller';

export default () => ({
  restrict: 'E',
  template,
  controller,
  controllerAs: 'taskCardController',
  scope: {
    addTask: '&',
    task: '=',
    isNew: '=',
    isCardShown: '='
  },
  bindToController: true
});
