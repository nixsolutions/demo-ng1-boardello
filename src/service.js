import io from 'socket.io-client';

export default class taskService {
  constructor($http, $timeout) {
    'ngInject';
    this.$http = $http;
    this.$timeout = $timeout;
    this.url = API_HOST;
    this.user = {};
    this.boards = {};
    this.board = {};
    this.board.data = [];
    this.socket = io(this.url);

    this.socket.on('boardList', (boards) => {
      this.$timeout(() => { // [Evgeniy Tatarin - 10/27/2016] handle digest cycle and render page on data update
        Object.assign(this.boards, boards);
      })
    });

    this.socket.on('boardData', (board) => {
      console.log('BOARD DATA');
      console.log('board: ', board);
      this.$timeout(() => { // [Evgeniy Tatarin - 10/26/2016] handle digest cycle and render page on data update
        Object.assign(this.board, board);
      })
    });

    this.socket.on('logged', (user, token) => {
      this.token = token;
      this.$timeout(() => { // [Evgeniy Tatarin - 10/26/2016] handle digest cycle and render page on data update
        Object.assign(this.user, user);
      })
    });

    this.socket.on('loginError', (err) => {
      this.$timeout(() => { // [Evgeniy Tatarin - 10/26/2016] handle digest cycle and render page on data update
        this.loginError = err;
      })
    });

    this.socket.on('signupError', (err) => {
      this.$timeout(() => { // [Evgeniy Tatarin - 10/26/2016] handle digest cycle and render page on data update
        this.signupError = err;
      })
    });

    this.socket.on('internalError', (err) => {
      this.$timeout(() => { // [Evgeniy Tatarin - 10/26/2016] handle digest cycle and render page on data update
        this.error = err;
      })
    });
  }

  getBoardsList() {
    let token = this.token;
    this.socket.emit('getBoardList', token, this.user);
  }

  getBoard(boardID) {
    this.socket.emit('getBoard', this.token, boardID);
  }

  addBoard(newBoard) {
    newBoard.users = [];
    newBoard.data = [];
    if (newBoard.restriction == 'private') {
      newBoard.users.push(this.user._id)
    }
    this.socket.emit('addBoard', this.token, newBoard,);
  }

  deleteBoard(boardID) {
    this.socket.emit('deleteBoard', this.token, boardID);
  }

  update() {
    const board = angular.copy(this.board); // [Evgeniy Tatarin - 10/26/2016] remove angular's $$hashKeys
    console.log('board._id: ', board._id);
    this.socket.emit('updateBoard', this.token, board)
  }

  login(userData) {
    this.socket.emit('login', userData);
  }

  signup(userData) {
    this.socket.emit('signup', userData);
  }

}
