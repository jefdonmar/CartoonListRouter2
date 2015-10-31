import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import Router from './router';
import './ajax_setup';

console.log('Hello, World');

var $app = $('.app');
new Router($app).start();

