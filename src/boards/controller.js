export default class BoardsController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
    this.newBoard = {};
    this.newBoard.restriction = 'private';
  }

  $onInit() {
    this.boards = this.taskService.boards;
  }

}
