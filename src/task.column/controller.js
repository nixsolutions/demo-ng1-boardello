let orderByReverse = false;

export default class TaskColumnController {
  constructor(taskService, $filter, $scope) {
    'ngInject';
    this.taskService = taskService;
    this.$filter = $filter;
    this.orderByReverse = orderByReverse;
    this.newTask = {
      name: 'New Task',
      priority: 'Minor',
      assign: '',
      description: '',
      comments: []
    };
  }

  $onInit() {
    //DRAGO-DROPABLE PART
    this.sortableOptions = {
      placeholder: "panel-placeholder",
      connectWith: ".column",
      stop: (event, ui) => {
        this.taskService.update();
        this.orderByValue = '';
      }
    };
  }

  addTask(task) {
    this.column.tasks.push(task);
  }

  deleteTask(task) {
    this.column.tasks = this.column.tasks.filter(item => item != task);
    this.taskService.update();
  }

  orderByPriority() {
    this.column.tasks = this.$filter('orderBy')(this.column.tasks, 'priority', orderByReverse);
    orderByReverse = !orderByReverse;
    this.taskService.update();
  }

}
