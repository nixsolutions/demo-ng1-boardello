export default class TaskCardController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
  }

  $onInit() {
    if (this.isNew) {
      this.taskTemplate = JSON.parse(JSON.stringify(this.task)); // [Evgeniy Tatarin - 11/05/2016] save new task template to use for all next new tasks
    }
    this.taskUpdate = JSON.parse(JSON.stringify(this.task)); // [Evgeniy Tatarin - 11/05/2016] create another object from initial task to apply all changes to it
    this.calculateChecklistProgress();
  }

  calculateChecklistProgress() {
    if(this.taskUpdate.checklist) {
      let doneCheklistItems = this.taskUpdate.checklist.filter(item => item.checked)
      this.checklistProgress =
        isNaN(doneCheklistItems.length/this.taskUpdate.checklist.length) ? 0 : ((doneCheklistItems.length/this.taskUpdate.checklist.length)*100).toFixed(2)  ;
    } else {
        this.checklistProgress = 0;
    }
  }

  addChecklist(){
    this.taskUpdate.checklist = [];
    this.calculateChecklistProgress();
  }
  removeChecklist() {
    this.taskUpdate.checklist = null;
    this.calculateChecklistProgress();

  }
  addCheckbox() {
    this.taskUpdate.checklist.push({checked: false, item: ''});
    this.calculateChecklistProgress();
  }
  removeCheckbox(checkbox) {
    this.taskUpdate.checklist = this.taskUpdate.checklist.filter(item => item != checkbox);
    this.calculateChecklistProgress();
  }
  addComment() {
    const comment = {author: this.taskService.user.username, date: new Date(), text: this.comment};
    this.taskUpdate.comments.unshift(comment);
    this.comment = '';
  }
  saveTask() {
    Object.assign(this.task, this.taskUpdate); // [Evgeniy Tatarin - 10/26/2016] apply updates to initial task
    if(this.isNew) {
      this.addTask(this);
      this.task = JSON.parse(JSON.stringify(this.taskTemplate)); // [Evgeniy Tatarin - 10/26/2016] reset to initial task template for next new item
      this.taskUpdate = JSON.parse(JSON.stringify(this.task)); // [Evgeniy Tatarin - 10/26/2016] reset to initial task template for next new item
    }
    this.taskService.update();
    this.isCardShown = false;
  }

  discardChanges() {
    this.comment = '';
    this.taskUpdate = JSON.parse(JSON.stringify(this.task)); // [Evgeniy Tatarin - 10/26/2016] reset to initial task
    this.isCardShown = false;
  }

}
