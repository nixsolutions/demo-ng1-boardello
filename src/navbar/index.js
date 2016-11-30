import ng from 'angular';
import navbarDirective from './directive';

export default ng.module('navbar', [])
  .directive('navbar', navbarDirective)
  .name;
