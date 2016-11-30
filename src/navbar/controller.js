export default class NavbarController {
  constructor(taskService, $timeout) {
    'ngInject';
    this.$timeout = $timeout;
    this.taskService = taskService;
    this.showBoards = false;
    this.showLogin = false;
  }

  logout() {
      this.taskService.user = {};
      Object.keys(this.taskService.board).forEach((key) => { delete this.taskService.board[key]; }); // [Evgeniy Tatatrin - 11/1/2016] make board object empty with saving reference to the initial object
  }

}
