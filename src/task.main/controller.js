
export default class TaskMainController {
  constructor(taskService, $scope) {
    'ngInject';
    this.taskService = taskService;
    this.$scope = $scope;
  }

  $onInit() {
    this.board = this.taskService.board;
  }

  addColumn() {
    this.board.data.push({
      columnName: 'New Column',
      tasks: []
    });

    this.taskService.update();
  }

  deleteColumn(column) {
    let columnIndex = this.board.data.indexOf(column);
    this.board.data.splice(columnIndex, 1);
    this.taskService.update();
  }

}
