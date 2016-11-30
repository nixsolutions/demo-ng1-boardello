export default class LoginController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
  }

  reset() {
    this.taskService.signupError = '';
    this.taskService.loginError = '';
    this.username = '';
    this.password = '';
  }
  signUp() {
    this.taskService.signup({username: this.username, password: this.password})
    this.reset();
  }

  logIn() {
    this.taskService.login({username: this.username, password: this.password})
    this.reset();
  }

}
