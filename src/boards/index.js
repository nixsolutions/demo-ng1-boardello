import ng from 'angular';
import boardsDirective from './directive';

export default ng.module('boards', [])
  .directive('boards', boardsDirective)
  .name;
