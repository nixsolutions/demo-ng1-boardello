import ng from 'angular';
import loginDirective from './directive';

export default ng.module('login', [])
  .directive('login', loginDirective)
  .name;
